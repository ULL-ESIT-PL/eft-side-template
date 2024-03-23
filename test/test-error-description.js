module.exports = [
  {
    input: 'test-err.calc',
    output: 'outerr.txt',
    expected: 'correcterr.txt',
  },
  {  //f = fun() { 1 }, f() = 8, write(f()),  # 8
    input: "fun-empty-on-the-left-side.calc",
    output: "outerr.txt",
    expected: "fun-empty-on-the-left-side-err.txt"
  },
]