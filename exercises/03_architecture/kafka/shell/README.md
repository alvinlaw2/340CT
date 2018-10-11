
# Using Apache Kafka in the Shell

The standard install of Kafka includes commandline tools to build **consumers** and **producers**.

This has been tested on MacOS.

Installing Kafka
```shell
$ brew install kafka
```

Start by running the Kafka server. You need to start zookeeper first (notice that we check its status to make sure it is running).
```shell
$ zkserver start
$ zkserver status
$ cd /usr/local/Cellar/kafka/0.11.0.1/bin/
$ kafka-server-start /usr/local/etc/kafka/server.properties
```
The server runs in the foreground which means we don't get the command prompt to run other commands. Lets put the server process in the background:

1. Press _ctrl+z_ to pause the server.
2. Run the `bg` command to put the process in the background.
3. Use the `jobs` command to see all background tasks.
4. Use the `fg 1` command to bring job 1 to the foreground.

Now we can create a consumer to listen for messages. Run the command in a new terminal window:
```shell
$ kafka-console-consumer --zookeeper localhost:2181 --topic test --from-beginning
```

Finally we create the producer which will allow us to send messages. Run this command in a third terminal window.
```shell
$ kafka-console-producer --broker-list localhost:9092 --topic test
```
You can type in messages which get printed out by the _consumer_.


## Standalone Broker

1. Creating and listing a new topic
2. Creating a producer and sending messages
3. Creating a consumer to listen for messages

Need to specify the host and port that zookeeper will use.
```shell
 $ kafka-topics --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test
$ kafka-topics --zookeeper localhost:2181 --describe --topic test
$ kafka-console-producer --broker-list localhost:9092 --topic test
$ kafka-console-consumer --zookeeper localhost:2181 --topic test --from-beginning
$ kafka-topics --zookeeper localhost:2181 --delete --topic test
```
For this last command to work you need to uncomment the line `delete.topic.enable` in the `/usr/local/etc/kafka/server.properties` config file, otherwise it has no effect.