
# Unit Testing in Python using UnitTest

Python language version of JUnit, by Kent Beck and Erich Gamma.

Module called `unittest`

Supports test automation, sharing of setup and shutdown code for tests, aggregation of tests into collections, and independence of the tests from the reporting framework. 

Module provides classes that make it easy to support these qualities for a set of tests.

Assuming the tests are in the spec/ directory
```shell
python -m unittest discover spec/
```

## Rules to Follow

The name of a test method must start with the letters 'test', otherwise it will be ignored.

Every test method must have exactly one parameter, self.

You must put self. in front of every built-in assertion method you call.

The tests must be independent of one another, because they may be run in any order. Do not assume they will be executed in the order they occur in the program.

## TAP Protocol

Module called `tappy` generates TAP output from UnitTest results.

http://tappy.readthedocs.io/en/latest/
