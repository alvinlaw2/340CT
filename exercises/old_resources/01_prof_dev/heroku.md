
# Deploying a NodeJS App to Heroku

In this worksheet you will learn how to host a NodeJS script on the free Heroku hosting platform.

When you create your Restify/Express routes file you need to ensure that you read the `PORT` environment variable and use this value to determine what port to run the server on. Here is a simple example to illustrate this point using the `http` package.

```javascript
const http = require('http')
const server = http.createServer( (req, res) => {
  res.writeHead(200)
  res.end('hello world')
}).listen(process.env.PORT || 8080)
```

Heroku needs a valid config file so we can use the  npm init  command to run through the config wizard. Complete this and then open the package.json file it creates. It should look like this.

```json
{
  "name": "AppNameHere",
  "version": "1.0.0",
  "description": "your description here",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  }
}
```

The important keys are `main` and `scripts.start` as Heroku will use these to determine how to start your script. You should also make sure that all dependencies are included so it knows what needs to be installed.

## Committing the Changes

Finally make sure you have committed any changes to your project and that your working directory is clean. It is also recommended that you push changes to your remote repository.

Create yourself an account on the Heroku website and open the [dashboard](https://dashboard.heroku.com/apps).

## Install the Heroku CLI

We will be interacting with Heroku using a command-line utility. Open up the Terminal window and install this.

```shell
$ wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh
```

Once installed you need to use this to log in which will exchange SSH keys.

```shell
$ heroku login
  Enter your Heroku credentials.
  Email: johndoe@gmail.com
  Password (typing will be hidden):
  Authentication successful.
```

Next we need to create our remote app on the cloud. If you don't specify a name parameter one
will be automatically generated for you.

```shell
$ heroku create myappname
  Creating myappname... done, stack is cedar-14
  https://myappname.herokuapp.com/ | https://git.heroku.com/myappname.git
  Git remote heroku added
```

If you check your git remotes you should find that heroku has added a second one.

```shell
$ git remote -v
  heroku  https://git.heroku.com/myappname.git (fetch)
  heroku  https://git.heroku.com/myappname.git (push)
  origin  git@gitlab.com:xxx.git (fetch)
  origin  git@gitlab.com:xxx.git (push)
```

## Deploying to Heroku

Assuming the git working directory is clean, deploying is as simple as pushing to the heroku remote instead of the origin remote. To push to the Heroku server:

```shell
$ git push heroku master
```

This will push the latest commits to the Heroku server. Once this is completed, the server will be stopped and then restarted using the information contained in the config file. You should be able to view the progress by checking the messages appearing in the terminal window.

## Running an Instance

The first time the app gets deployed we need to start an app instance running.

```shell
$ heroku ps:scale web=1
```

You should now be able to view your application on the server.

## Checking the Logs

Heroku keeps a detailed log which can be viewed using the  heroku logs  command. By passing the tail flag we only see the last 10 lines. For example if you view the URL, the following gets added to the log file.

```shell
$ heroku logs --tail
  2015-04-18T18:34:57.199901+00:00 heroku[router]: at=info method=GET path="/" host=myappname.herokuapp.com request_id=c98d5ee5-afb8-47fd-bf78-05c2ac3d3713 fwd="90.244.82.220" dyno=web.1 connect=2ms service=8ms status=200 bytes=124
```
