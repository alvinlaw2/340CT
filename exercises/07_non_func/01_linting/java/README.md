
# Linting Java Code

A **linter** is a program that analyses your scripts for _programmatic_ and _stylistic_ errors and will flag up anything that may cause problems.

There are a number of linters available for Java such as XXX and XX however our preferred option is to use [CheckStyle](https://sourceforge.net/projects/checkstyle/files/checkstyle/) which is highly configurable.

## Installing and Running the Linter

There are [detailed instructions](http://checkstyle.sourceforge.net/cmdline.html) available online showing how to run the linter from the commandline.

You need to download the latest version of CheckStyle which can be found on [SourceForge](https://sourceforge.net/projects/checkstyle/files/checkstyle/), `checkstyle-8.5-all.jar` at the time of writing.

Drop this into the project directory and run it directly using the `-jar` flag.

The linting _rules_ are called **checks**. There are a number of **standard checks** that are built-in and these come with [detailed documentation](http://checkstyle.sourceforge.net/checks.html). There are others that can be installed.

You need to supply an XML file that contains the _checks_ to apply. You can either write your own or take a standard one and modify. In this example we are using the config file used by Google, called `google_checks.xml`.

```shell
$ java -jar checkstyle-8.5-all.jar -c google_checks.xml Lister.java
```
This will apply the linting rules to the `Lister.java` file and display any issues in the terminal window.

## Test Your Knowledge

Run the linter on `Lister.java`, this will flag up