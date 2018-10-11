
# Unit Testing using Swift

Before trying these examples you need to install the Swift language on your chosen platform https://swift.org and add it to your path. To test it is correctly installed you can run the Swift REPL from the shell.
```
$ swift
  Welcome to Apple Swift version 3.0.2 (swiftlang-800.0.63 clang-800.0.42.1).
  Type :help for assistance.
  1> :exit
$
```

## Unit Testing CLI

Use `xcodebuild`. The `-help` flag lists the available targets, build configurations and schemes. For this to work you need to specify a development team.

```
$ xcodebuild -list
  Information about project "To Do":
    Targets:
      To Do
      To DoTests
      To DoUITests

    Build Configurations:
      Debug
      Release

    Schemes:
        To Do
```
Now we can specify the appropriate scheme