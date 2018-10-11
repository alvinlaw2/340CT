
# Test Anything Protocol (TAP)

This sample code shows how the TAP protocol can be used to test a NodeJS module.

Start by checking you are running the latest version of NodeJS
```shell
$ node -v
$ nvm list-remote
$ nvm install 9.1.0
$ nvm alias default 9.1.0
$ node -v
```

Now navigate to this directory and install the `tap` package then run the tests. Note that the test command is described in the `package.json` file.
```shell
$ npm install tap
$ npm test
  test/mathTest.js ...................................... 2/2
  total ................................................. 2/2
    2 passing (282.565ms)
    ok
```
We can run the tests with code coverage turned on:
```shell
$ npm test -- --cov
  test/mathTest.js ...................................... 2/2 1s
  total ................................................. 2/2
    2 passing (1s)
    ok
  ----------|----------|----------|----------|----------|----------------|
  File      |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
  ----------|----------|----------|----------|----------|----------------|
  All files |    55.56 |     37.5 |      100 |    55.56 |                |
   math.js  |    55.56 |     37.5 |      100 |    55.56 |       7,8,9,10 |
  ----------|----------|----------|----------|----------|----------------|
```
We can also generate a visual coverage report in the web browser:
```shell
$ npm test -- --coverage-report=lcov
```
The initial web page shows the code coverage per module.
![code coverage summary](../../../.images/code_coverage_summary.png)
You can also drill down and see the coverage for each line of each module.
![code coverage by line](../../../.images/code_coverage_lines.png)
Note that you can include both the `--cov` and `--coverage-report` flags if you want.

## Test Your Knowledge

We need to add some more tests to improve code coverage. Add these two lines to your test file and run the tests.
```javascript
tap.equal(math(200), 'big')
tap.equal(math(-10), 'negative')
```
Notice there are some test failures. Fix the `modules/math.js` file so that all tests pass. Check the code coverage.

## The TAP protocol

The tests generate output in the TAP protocol and this is then formatted and displayed in the terminal. To see the raw TAP data we need to install and use the `tap-mocha-reporter` module.
```shell
$ npm install tap-mocha-reporter
$ npm test | node_modules/.bin/tap-mocha-reporter tap
  TAP version 13
  # Subtest: test/currencyTest.js
      # Subtest: a child test
          ok 1 - should be equal
          1..1
      ok 1 - a child test # time=776.678ms

      ok 2 - should be equal
      1..2
      # time=855.181ms
  ok 1 - test/currencyTest.js # time=1374.617ms

  # Subtest: test/mathTest.js
      ok 1 - should be equal
      ok 2 - should be equal
      1..2
      # time=11.471ms
  ok 2 - test/mathTest.js # time=258.755ms

  1..2
  # time=1655.309ms
```
