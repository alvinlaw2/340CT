
# Profiling in NodeJS

NodeJS includes the **Tick Profiler**, a native tool, which allows you to profile your NodeJS code. It is activated using the `--prof` flag, eg:
```shell
$ node --prof index.js
```
This will capture data on the performance but, in a development environment this will need to be simulated using the [Apache Bench](https://httpd.apache.org/docs/2.4/programs/ab.html) tool, eg:
```shell
$ ab -k -c 20 -n 250 "http://localhost:8080"
```
You will note that there are three flags used:

1. `-k` - **KeepAlive** - perform multiple requests using the same session.
2. `-c 20` - **Concurrency**: the number of concurrent requests.
3. `-n 250` - **Requests**: the number of requests to perform in the session.

Apache Bench generates a range of useful data however we need more information to highlight where the issues are in the code. This is done using a _tick file_.

## The Tick File

by using the `--prof` flag, NodeJS generates a _tick file_ in the current directory with the name ` isolate-0xnnnnnnnnnnnn-v8.log`, where nnn... is a number. This file needs to be interpreted using a _tick interpreter_ and the analysis piped to a text file which can then be opened and read.
```shell
$ node -prof-process  isolate-0xnnnnnnnnnnnn-v8.log > processes.txt
```

## References

https://nodejs.org/en/docs/guides/simple-profiling/

# Profiling in Java

java includes a native profiler called [hprof](https://docs.oracle.com/javase/7/docs/technotes/samples/hprof.html) which is run from the commandline.  

# Profiling in Swift

There is a third-party tool called [xcprofiler](https://github.com/giginet/xcprofiler) which can be used to profile swift code.

## References

http://irace.me/swift-profiling

# Profiling in C++

Use the [gprof](https://users.cs.duke.edu/~ola/courses/programming/gprof.html) tool to profile your C++ programs.
