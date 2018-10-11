
# Dependency Checks in NodeJS

One of the checks you should carry out is to ensure that:

1. All the modules imported into the project in the `package.json` file are actually used in your code.
2. All the modules used in your code are listed in the `package.json` file.

You can use the [dependency-check](https://www.npmjs.com/package/dependency-check) module for this:
```shell
$ npm install --save-dev dependency-check
$ node_modules/.bin/dependency-check --unused
$ node_modules/,bin/dependency-check --missing
```
If either of these tests fail the script returns a non-zero code which means they can be used as part of an automated Continuous Integration pipeline.
