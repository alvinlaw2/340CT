
# Steps to install and run Kafka and Zookeeper on Ubuntu 17.10

# Installing Java (first step may not be needed)
sudo apt-get install default-jre
sudo apt-get install openjdk-8-jdk
# finding the path to the JDK install
# (find the Java packages then list the files from the current JDK)
sudo dpkg -l | grep jdk
sudo dpkg -L openjdk-8-jdk
# set the JAVA_HOME env var to point to the location of the java directory
export JAVA_HOME=/usr/lib/jvm/default-java

# Installing Zookeeper
sudo useradd -m kafka
sudo adduser kafka sudo
sudo apt-get install zookeeperd
# starting zookeeper
/usr/share/zookeeper/bin/zkServer.sh start

# downloading and installing Kafka
# download and uncompress the latest version
mkdir -p ~/kafka
cd ~/kafka/
wget https://www.apache.org/dist/kafka/1.0.0/kafka_2.11-1.0.0.tgz
ls                                                                                                                                                                785  scala                                                                                                                                                             786  sudo apt-get install scala                                                                                                                                        787  scala                                                                                                                                                             788  wget https://www.apache.org/dyn/closer.cgi?path=/kafka/1.0.0/kafka_2.11-1.0.0.tgz                                                                                 789  ls                                                                                                                                                                790  rm closer.cgi\?path\=%2Fkafka%2F1.0.0%2Fkafka_2.11-1.0.0.tgz                                                                                                      791  wget https://www.apache.org/dyn/closer.cgi?path=/kafka/1.0.0/kafka_2.11-1.0.0.tgz                                                                                 792  wget                                                                                                                                                              793  ls                                                                                                                                                                794  rm closer.cgi\?path\=%2Fkafka%2F1.0.0%2Fkafka_2.11-1.0.0.tgz                                                                                                      795  ls                                                                                                                                                                796  wget https://www.apache.org/dist/kafka/1.0.0/kafka_2.11-1.0.0.tgz                                                                                                 797  ls                                                                                                                                                                798  clear                                                                                                                                                             799  tree -L 2                                                                                                                                                         800  sudo apt-get install tree                                                                                                                                         801  tree -L 2                                                                                         802  cd kafka/                                                                                              803  ls
tar -zxf kafka_2.11-1.0.0.tgz
# move files to a directory in /usr/local/
sudo mv kafka_2.11-1.0.0 /usr/local/kafka
cd /usr/local/kafka/
mkdir /tmp/kafka-logs
# start the kafka server
/usr/local/kafka/bin/kafka-server-start.sh -daemon /usr/local/kafka/config/server.properties