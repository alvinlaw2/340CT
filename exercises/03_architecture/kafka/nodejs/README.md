
# Kafka

## Installation on MacOS

The following installs Kafka on MacOS.
```shell
$ brew install kafka
```

Now start both _zookeeper_ and _kafka_.
```shell
$ zkserver start
$ zkserver status
$ cd /usr/local/Cellar/kafka/0.11.0.1/bin/
$ kafka-server-start /usr/local/etc/kafka/server.properties
```

Check version of  JDK:
``` shell
$ java -version
```


