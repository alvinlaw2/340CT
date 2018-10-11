# Test Anything Protocol

There are a number of test execution engines that can run the tests in the test script repository.

The test result data needs to be in a usable format so it can:

1. Communicate the failed tests to the developer
2. Identify where there are gaps in testing
3. Produce live project documentation.

There are two steps in unit testing:

1. Test execution and raw data generation
2. Test management and reporting

TAP is a standard text data format that can be understood by both steps
It was originally developed for unit testing the Perl interpreter in 1987.

## How Does it Work

The Test Anything Protocol is language agnostic and separates the test execution and raw data generation from the test management and reporting

1. **TAP Producer** - The test execution engine runs the test scripts and prints the results to stdout (the screen)
2. **TAP Parser** - A tool that parses data in the TAP format this output and generates useful reports.

Sample TAP report:

```
TAP version 13
# simple tests
ok 1 should be "odd"
ok 2 should be "even"

1..2
# tests 2
# pass  2

# ok
```

Slightly more complex report:

```
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

## Using the Parser

The tap producer sends its output to stdout which defaults to the shell. This means it is easy to use Linux pipes to redirect this to the TAP parser.

Most parsers also send their output to stdout which can be redirected to a file.

```shell
$ node spec/testRunnerTAP.js | node_modules/.bin/faucet > testReport.txt
```

## TAP Support

| Language | TAP Tool        |
| -------- | --------------- |
| Python   | tappy           |
| NodeJS   | node-tap module |
|Java      | tap4j           |
|iOS       | XCTest          |
