import testArrayDescription from "./functionalities/test-array-description.mjs";
import testFunOnTheLeftDescription from "./functionalities/test-fun-on-the-left-description.mjs";
import testObjectsDescription from "./functionalities/test-objects-description.mjs";
import testLoopsDescription from "./functionalities/test-loops-description.mjs";
import testStringDescription from "./functionalities/test-string-description.mjs";
import testScopeDescription from "./functionalities/test-scope-description.mjs";
import testOperationsDescription from "./functionalities/test-operations-description.mjs";
import testRecursiveDescription from "./functionalities/test-recursive-description.mjs";
import testFunOperationDescription from "./functionalities/test-fun-operation-description.mjs";
import testConditionalDescription from "./functionalities/test-conditional-description.mjs";
import testManyargsDescription from "./functionalities/test-manyargs-description.mjs";
import testBooleanDescription from "./functionalities/test-boolean-description.mjs";
import testCallDescription from "./functionalities/test-call-description.mjs";

export default testArrayDescription.
  concat(testFunOnTheLeftDescription).
  concat(testObjectsDescription).
  concat(testLoopsDescription).
  concat(testStringDescription).
  concat(testScopeDescription).
  concat(testOperationsDescription).
  concat(testRecursiveDescription).
  concat(testFunOperationDescription).
  concat(testConditionalDescription).
  concat(testManyargsDescription).
  concat(testBooleanDescription).
  concat(testCallDescription)
;
