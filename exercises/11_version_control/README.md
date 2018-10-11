
# Version Control

## Use of Git Hooks

Let's use a **Git Hook** to run checks on our code before allowing us to commit. In this example git will reject any code that fails the linting test.

Use the terminal to create a new file in the `.git/hooks/` directory called `pre-commit`.
```shell
$ nano .git/hooks/pre-commit
```
Paste in the shell script from the gist below and save:

https://gist.github.com/rashtay/328da46a99a9d7c746636df1cf769675

Now you need to set the script as executable.
```shell
$ chmod +x .git/hooks/pre-commit
```
You need to make sure `eslint` is installed:
```shell
npm install --save-dev eslint
```
Now you need to make changes to a file. Introduce some linting errors/warnings and try committing the changes!
``` shell
$ git commit -m 'introduced a linter error'

  Validating Javascript:

  /.../index.js
     35:1   error    'defaultPort' is not defined  no-undef
     35:15  warning  No magic number: 8000         no-magic-numbers
     35:19  warning  Extra semicolon               semi
    305:34  error    'defaultPort' is not defined  no-undef

  ✖ 4 problems (2 errors, 2 warnings)
    0 errors, 1 warning potentially fixable with the `--fix` option.

	  ESLint Failed: index.js

  Javascript validation completed!

  COMMIT FAILED: Your commit contains files that 
  should pass ESLint but do not. 
  Please fix the ESLint errors and try again.
 ```
Notice that the commit failed thus preventing you from adding any code that is badly formatted to your local repository.

![pre-commit takedown](../.images/pre-commit-hook.jpeg)

Now fix the errors and try committing again, cool stuff!

## Bibliography

Many thanks to:

https://medium.com/@shettyrahul8june/how-to-run-eslint-using-pre-commit-hook-25984fbce17e
