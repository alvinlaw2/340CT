
# 1 Using a Linter

JavaScript is a powerful language and includes a number of powerful features but it also includes features that, whilst they may produce working code, will make your code difficult to read and debug! A **linter** is a program that analyses your scripts for _programmatic_ and _stylistic_ errors and will flag up anything that may cause problems. They define a _professional subset_ of the language and reject any code that doesn't meet that standard.

There are a number of _linters_ available for the JavaScript language. The original one was written by Douglas Crockford (the author of JavaScript: The Good Parts). This enforced _his_ idea  of good JavaScript and was notorously not configurable! There are now a number of popular linters available, your choice should be based on what will run in your IDE as well as your personal preferences. The most popular linters are:

1. [JSLint](http://www.jslint.com/help.html), the original, by Douglas Crockford
2. [JSHint](http://jshint.com/docs/)
3. [ESLint](http://eslint.org) which is supported by many _IDEs_ and _code editors_

EsLint is highly configurable through a hidden config file that needs to be added to the project root directory. When you submit your coursework you must demonstrate that it contains no errors or warnings when run using an identical configuration file.

## 1.1 The Linter Configuration

ESLint is completely configurable through a configuration file `.eslintrc` which is located in the `01 Introduction to NodeJS` directory. By default any file or directory starting with the period (.) character is hidden. To display hidden files and directories click on the **gear icon** at the top of the _Documents Tree_ and choose _Show Hidden Files_.

1. the **env** object imports groups of pre-defined global variables based on the _environment_ they are used in. In our example we will be writing scripts using the NodeJS environment so we want the linter to recognise any NodeJS global variables.
2. the **rules** object defines any additional rules we want to enforce. In this example we are specifying that we _don't want semicolons_ at the end of each line, that we will use a 2 space tab for indenting, we will use single quotes for strings and that we are using UNIX line endings.

Near the bottom of the file list you should see a file called `.eslintrc`, the initial dot (.) in the filename caused it to be hidden by default.

1. Notice that the file contents are using the _JSON_ format which should be familiar to you.
2. There are two JSON objects, **env** and **rules**.
  1. The **env** object describes the _environment_ you are using. In our example we indicate that we will be using the ECMA6 syntax, are writing _NodeJS_ code, and will be using _Jasmine_ tests.
  2. The **rules** object defines the rules we want to apply. As you can see we are requiring tab indentation, single quotes and avoiding the use of semicolons on each line. The full list of rules can be found in the [ESLint Documentation](http://eslint.org/docs/rules/).
  3. Each rule has a reporting level where 0 means _disabled_, 1 means _warning_ and 2 means _error_. This affects how the rule violations are reported.
  4. Some rules allow for additional options. If these are specified, both the reporting level and options need to be in an array.

Whilst you need to use the supplied configuration file in your assignment you should take time to understand the range of [rules](http://eslint.org/docs/rules/) available and adding them to your `.eslintrc` configuration file. To make this process easier you can use this handy [ESLint Rule Generator](http://rapilabs.github.io/eslintrc-generator/).

## 1.2 Running ESLint

Although there are plugins for many popular IDEs you should get used to running the linter from the terminal. ESLint is available as a NodeJS package which allows you to run it from the terminal. Since you may find yourself using an editor with support baked in, why would you want to do this?

1. Some editors don't have ESLint support.
2. Running ESLint in the Terminal gives a summary of the linting errors.to check if _all the scripts_ are fixed.
3. It can be configured to fix many of the most common error such as whitespace and semicolon usage.
4. The linting can be run as part of the _Continous Integration_ and _Continous Deployment_ process (more on this in a later worksheet)
5. Finally, it will be used during the marking of your assignment to make sure your code is formatted correctly!

### 1.2.1 Test Your Knowledge

lets install, configure and run the console-based linter.

1. Start by opening a terminal window and navigating to the `shopping/` directory.
2. Install the NodeJS ESLint package `npm install eslint --save-dev`. This installs it and adds it to your `package.json` file in the `devDependencies` section.
3. Run the executable `node_modules/.bin/eslint index.js`. This runs the `eslint` executable located in the hidden `.bin/` directory in the `node_modules/` directory.
4. You will see a list of all the errors and warnings found together with a summary with the total number of errors and the total number of warnings.
5. Open the `index.js` file and, using the linter report, fix the issues. You should re-run the linter regularly to check your progress.
6. Run the linter on the module using `node_modules/.bin/eslint modules/shopping.js` and note the errors it finds.
7. Now run the same command but this time pass the `fix` flag, `node_modules/.bin/eslint --fix modules/shopping.js`
8. Open the `shopping.js` file and notice that most of the issues have gone. The fix tool is not perfect, it may have introduced new errors so use it with caution!
9. Manually correct any errors until the linter reports 0 errors and warnings.
10. Finally run the linter against all the files in the project using `node_modules/.bin/eslint .` to ensure there are absolutely no linting errors in your code. Well done!
