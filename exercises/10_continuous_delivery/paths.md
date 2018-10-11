
# Paths

When you type in a command such as `pwd` (without specifying a path) the server needs to know which directory it can be found in.

The $PATH environment variable lists the paths that will be used to find the command.
```
$ echo $PATH
  /usr/local/sbin:usr/local/bin:usr/sbin
```

## Adding More Paths

If you install additional software that is not in the paths stored in the `$PATH` environment variable you have two ways to run this:

1. Enter the full path to the executable each time
2. Add the application's directory to the `$PATH` environment variable, this information is stored in the `~/.bash_profile` file.

```
$ PATH=$PATH:/data/myscripts
$ export PATH
$ source ~/.bash_profile
```
Note that we need to load this information back in from the file.