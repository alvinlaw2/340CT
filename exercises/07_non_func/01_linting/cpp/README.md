
# Linting C++

One of the biggest employers of programmers is Google and, to ensure consistent coding standards they have written a set of [style guides](https://github.com/google/styleguide) that cover all the key languages they employ.

They rely heavily on _linters_ to enforce these styles and, since there was no decent linter for C++ they wrote their own in Python called `cpplint` and open sourced it.

Linter settings are stored in a `CPPLINT.cfg` file and affect all linting in its directory and subdirectories.

There are two ways that `cpplint` is distributed.

## Standalone Executable

This is a shell tool that can be installed from [PyPI](https://pypi.python.org/pypi/cpplint) using `sudo pip install cpplint`. You can then run it directly on all files in a directory, `cpplint <DIR>/*`. To see the help, use the `--help` flag, `cpplint --help`

## Python Script

It can also be [downloaded](https://github.com/google/styleguide/tree/gh-pages/cpplint) as a _python script_ and executed. you should download the file `cpplint.py`. The easiest way is to find the raw code on GitHub and pull the file using `wget`. This is installed by default on Linux and can be installed on MacOS using Homebrew. You will need to set the executable flag.

```shell
wget https://raw.githubusercontent.com/google/styleguide/gh-pages/cpplint/cpplint.py
chmod +x cpplint.py
```
Once its installed it can be used in the same way as the PyPI tool.
```shell
./cpplint.py <DIR>/*
```
The help is also accessed in the same way `./cpplint.py --help`.
