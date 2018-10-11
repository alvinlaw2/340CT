
# Configuring Jenkins

Create an account at https://hub.openshift.com and log in.

Deploy a Jenkins Server by clicking on the button at https://hub.openshift.com/quickstarts/98-jenkins-server which will create a small CI server. Launch this.

Check that ruby 2.x is installed on the development machine then install the openshift tools. Finally run the rhc setup subcommand.
```
$ ruby -e 'puts "Welcome to Ruby"'
Welcome to Ruby
$ sudo gem install rhc
...
$ rhc setup
...
```
Now you can SSH into the server to retrieve the username and password needed to log into Jenkins. The SSH command is on the server launch page under the **Remote Access** section. You will need to paste the supplied command into your bash shell. This will log you in. Now to find the username and password.
```
cat jenkins/env/JENKINS_USERNAME
cat jenkins/env/JENKINS_PASSWORD
```
Now you can use the url to access the Jenkins server and log in.

# Installing Jenkins on Ubuntu

```
wget -q -O - https://pkg.jenkins.io/debian/jenkins-ci.org.key | sudo apt-key add -
sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
sudo apt-get update
sudo apt-get install jenkins
```
Installing GitLab Community Edition
```
sudo apt-get install curl openssh-server ca-certificates postfix
curl -sS https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh | sudo bash
sudo apt-get install gitlab-ce
sudo gitlab-ctl reconfigure
```
