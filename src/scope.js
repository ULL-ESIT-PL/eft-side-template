const visit = require("ast-types").visit;
const { RegexpFromNames } = require('./utils.js');

// Detect what support functions are used: dependency analysis
function dependencies(dAst) {
  const Support = require("./support-lib.js");
  // Build regexp matching the names of the support functions /factorial|power|min|max|.../
   const patternIsSupport = RegexpFromNames(Object.keys(Support));
      
  dAst.dependencies = new Set([]);
  visit(dAst.ast, {
    visitCallExpression(path) {
      const node = path.node;
      let name = node.callee.name;
      if (patternIsSupport.test(name)) {
        dAst.dependencies.add(name);
      }
      this.traverse(path);
    }
  });

  return dAst;
}

// Builds the set of variables that are initialized in the program
const scopeAnalysis = (dAst) => {
  const Scope = require('./scope-class.js');
  let scope = new Scope(null); // global scope
  let ast = dAst.ast;
  
  visit(ast, {
    visitFunctionExpression(path) {
      let node = path.node;
      // Use arrowfunctions for developer functions and function expressions for user functions
      // if (!["ArrowFunctionExpression", "FunctionExpression"].includes(node.type)) return false;
      scope = new Scope(scope); // the current scope becomes this function scope

      // mark parameters as initialized
      let params = node.params;
      for (let param of params) {
        scope.setAsInitialized(param.name);
      }
      this.traverse(path);
      // length is implemented via a getter in the Scope class
      if (scope.length > 0) { //insert declarations at the beginning of the function
        node.body.body.unshift(scope.buildDeclaration())
      }
      node.scope = scope; // save scope info as a property of the function node
      let d = scope.notDeclaredMessage(); //show warnings if any
      if (d) console.error(d + ' used in function scope');

      scope = scope.parent; // restore the parent scope
    },
    visitAssignmentExpression(path) {
      const node = path.node;
      if (node.left.type === "Identifier") {
        let name = node.left.name;
        if (name && /^[$]/.test(name) && !scope.has(name)) {
          // If not the name of a support function, mark as initialized/declared in current scope
          if (!dAst.dependencies.has(name)) {
            scope.add(name);
          }
        }
      }
      this.traverse(path);
    },
    visitIdentifier(path) {
      let name = path.node.name;
      // If prefixed with '$' and not the name of a support function, mark as used in current scope
      if (/^[$]/.test(name) && !dAst.dependencies.has(name)) {
        scope.setAsUsed(name);
      }

      this.traverse(path);
    }
  });

  // Insert declarations at the beginning of the programs
  if (scope.length > 0) {
    ast.body.unshift(scope.buildDeclaration());
  }

  // Save scope info as a property of the program node
  ast.scope = scope;
  
  // Show warnings if any
  let d = scope.notDeclaredMessage();
  if (d) console.error(d + ' used in global scope')

  return dAst;
};

module.exports = {
  scopeAnalysis,
  dependencies,
}