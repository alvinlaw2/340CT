
# Linting Swift

It is important that all code in a project sticks to the same coding standards. Linters are static analysis tools that check your code against a set of rules and report any issues. This means that you can enforce a single coding standard across your entire team. if you are using the [Swift]() language you can choose from one of two linting tools. [SwiftLint](https://github.com/realm/SwiftLint) only runs on MacOS (it requires the XCode libraries) however [Tailor](https://github.com/sleekbyte/tailor) can run on different platforms.

## SwiftLint (MacOS Only)

If you are using the [Swift]() language you can use the [SwiftLint](https://github.com/realm/SwiftLint) linting tool which can be installed using [HomeBrew](https://brew.sh) using `brew install swiftlint`.

Once installed you can run it in any directory containing `.swift` files and it will provide a report of any violation in coding standards.

### Rules

`swiftlint` will apply a set of default [rules](https://github.com/realm/SwiftLint/blob/master/Rules.md) and this can be customised by adding a `.swiftlint.yml` file in the directory you run the linter from. This file has been added to the directory and you should take a look at how the linting rules can be customised.

### Try It

1. Install _SwiftLint_ then navigate to the `exercises/05_unit/linting/swift/` directory. Now run `swiftlint`. Notice that it reports a number of issues!
2. Try fixing the issues and running `swiftlint` until it reports a success.

## Tailor

Unlike SwiftLint, the Tailor tool can run on Linux and even Windows 10 as well. To install on Linux or MacOS:
```shell
$ curl -fsSL https://tailor.sh/install.sh | sh
```
Or alternatively if you are on MacOS you can `brew install tailor`.

If you are running Windows 10 you can:
```
iex (new-object net.webclient).downloadstring('https://tailor.sh/install.ps1')
```

Once installed you call it from the directory you want to lint and pass it the directory (the current directory in the first example and the swift subdirectory in the second example):
``` shell
$ tailor .
$ tailor swift
```

### Rules

`taylor` will apply a set of default [rules](https://github.com/sleekbyte/tailor/wiki/Rules) and this can be customised by adding a `.taylor.yml` file in the directory you run the linter from. This file has been added to the directory and you should take a look at how the linting rules can be customised.

You need to specify the config file if its not in the current directory:
```shell
$ tailor -c .tailor.yml swift
```
