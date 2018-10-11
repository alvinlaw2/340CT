
# Code Duplication

We can use the [jscpd](https://github.com/kucherenko/jscpd) tool to check for duplicate code in our source.
 
```shell
$ npm install -g jscpd
$ jscpd --path modules/ --languages javascript
```