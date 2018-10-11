
# the base container
FROM node:7.7.2
# all commands will be run from this directory
WORKDIR /home
# runs a shell command
RUN mkdir data
RUN npm install restify
# copies a file into the container
ADD server.js /home/server.js
# creates a mount point linked to the host to persist data
VOLUME /home/data
# runs a script
CMD ["node", "/home/server.js"]
