
# Using Docker for Mac

This tutorial covers using **Docker for Mac**. This can be downloaded and installed from https://docs.docker.com/docker-for-mac/install/ and it is assumed you don't have Docker Toolbox installed. If you have already installed this you need to follow the instructions https://docs.docker.com/docker-for-mac/docker-toolbox/ before you can use Docker for Mac.

```
$ docker --version
  Docker version 17.03.0-ce, build 60ccb22
$ docker-compose --version
  docker-compose version 1.11.2, build dfed245
$ docker-machine --version
  docker-machine version 0.10.0, build 76ed2a6
```
To see a list of the subcommands available use the `--help` flag. You can also use the help flag to get help with the subcommands.
```
$ docker --help
$ docker run --help
```

## Spinning up a Container

```
$ docker run -d -p 8080:80 --name webserver nginx
```
You can now access the web server at http://localhost:8080

Listing _all_ the containers.
```
$ docker ps -a
  CONTAINER ID  IMAGE        COMMAND                 CREATED         STATUS                   PORTS                          NAMES
  854cf311ce32  nginx        "nginx -g 'daemon ..."  10 minutes ago  Up 10 minutes            443/tcp, 0.0.0.0:8080->80/tcp  webserver
  df79f81a9729  hello-world  "/hello"                24 hours ago    Exited (0) 24 hours ago                                 suspicious_booth
```

Listing the _running_ containers.
```
$ docker ps
  CONTAINER ID  IMAGE  COMMAND                 CREATED         STATUS         PORTS                          NAMES
  854cf311ce32  nginx  "nginx -g 'daemon ..."  10 minutes ago  Up 10 minutes  443/tcp, 0.0.0.0:8080->80/tcp  webserver
```
To delete all the stopped containers
```
$ docker container prune
  WARNING! This will remove all stopped containers.
  Are you sure you want to continue? [y/N] y
  Deleted Containers:
  df79f81a9729065f9c2a625003f0b328fed54bb595c8c857ee9a19ccabe0a44b

  Total reclaimed space: 0 B
```

Docker containers are built from **images**. We can also see the docker images (used to build containers).
```
REPOSITORY   TAG     IMAGE ID      CREATED      SIZE
nginx        latest  6b914bbcb89e  8 days ago   182 MB
hello-world  latest  48b5124b2768  7 weeks ago  1.84 kB
```
We don't need the `hello-world` container so this can be deleted. This will fail if there are any running containers using the image.
```
$ docker rmi hello-world
  Untagged: hello-world:latest
  Untagged: hello-world@sha256:c5515758d4c5e1e838e9cd307f6c6a0d620b5e07e6f927b07d05f6d12a1ac8d7
  Deleted: sha256:48b5124b2768d2b917edcb640435044a97967015485e812545546cbed5cf0233
  Deleted: sha256:98c944e98de8d35097100ff70a31083ec57704be0991a92c51700465e4544d08
```
## Connecting to a Running Container

next we will run the `bash` shell in our running container by using the `exec` command. We will need to reference the container using its **container ID**. `exit` will return you to the host OS.
```
$ docker exec -it 7460c2c6fca9 bash
# ls
  bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
# exit
```

## Copying Files

The final step is to copy some files into the container. You should find a simple website in the `website/` directory. The following command copies the _contents of_ the `website/` directory into the `/usr/share/nginx/html/` directory.
```
docker cp website/. /usr/share/nginx/html/
```
Try loading the web page at http://localhost:8080 and you should see the website.

## Automation

we can automate the process of building docker containers by writing a **DockerFile** which will describe the steps needed to build and run the container. 
