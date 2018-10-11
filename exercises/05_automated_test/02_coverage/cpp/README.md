
# Calculating Code Coverage in C++

## According to StackOverflow

Code coverage is not linked to the test framework you use.

With C++ on Linux, you have to compile your software with special flags to enable the code coverage, e.g. with g++ you have to set the argument --coverage (and disabling all optimisations is also recommended).

When you then run the test programs, you will get a lot of files with the coverage data in them. These can then be collected and evaluated by e.g. `lcov`.
`lcov` can create HTML pages with the result, but is also prints the totals of the coverage analysis to `stdout`. So, you would have to build a script that runs lcov, filters the output and reports error or failure depending on the percentage measured.

You can set limits for `lcov` to define when the coverage is sufficient or not, but this is only used for the background color in the HTML output.

## Additional Resources

Here are some good tutorials showing how to use the `gcov` and `lcov` tools with the `gcc` compiler.

1. https://codeflu.blog/2014/12/26/using-gcov-and-lcov-to-generate-beautiful-c-code-coverage-statistics/
2. https://qiaomuf.wordpress.com/2011/05/26/use-gcov-and-lcov-to-know-your-test-coverage/


