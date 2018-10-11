
# Working with the TAP Protocol

tests written using the `tape` module output data in the **tap** format.
```shell
$ node tests/mathTest.js
  TAP version 13
  # should identify an odd number
  ok 1 checking for an odd number
  # should identify an even number
  ok 2 checking for an even number

  1..2
  # tests 2
  # pass  2

  # ok
```

## Reporters

Since the TAP data format is standard there are a lot of tools that can be used to convert it to different formats. For example, the `tap-json` module converts it to a JSON object.
```shell
$ node tests/mathTest.js | node_modules/.bin/tap-json
{"stats":{"asserts":2,"passes":2,"failures":0},"asserts":[{"number":1,"comment":"should identify an odd number","name":"checking for an odd number","ok":true,"extra":{}},{"number":2,"comment":"should identify an even number","name":"checking for an evennumber","ok":true,"extra":{}}]}
```
Some reporters send the output to the terminal and this can be piped to a file if required.
```
node tests/mathTest.js | node_modules/.bin/tap-json > results.json
```

Other reporters are designed to generate files containing the report, such as the `tap-html` reporter.
```
 node tests/mathTest.js | node_modules/.bin/tap-html --out docs/testResults/index.html
 ```

There are a full list of reporters here:

https://www.npmjs.com/package/tape
