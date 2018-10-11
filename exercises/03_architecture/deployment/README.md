
# Deploying to Heroku

During your development process you will need to deploy your API code to a remote server. There are plenty of options but one of the best (free) options is to use [Heroku](https://dashboard.heroku.com/apps).

## Installation

Start by creating an account then install the [commandline tools](https://devcenter.heroku.com/articles/heroku-cli):

### MacOS
```shell
$ brew install heroku/brew/heroku
```

### Linux
```shell
$ wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh
```

### Logging In
```shell
$ heroku login
  Enter your Heroku credentials:
  Email: johndoe@gmail.com
  Password: *********
  Logged in as johndoe@gmail.com
```
```shell
$ heroku create notes-api-test
Creating ⬢ notes-api-test... done
https://notes-api-test.herokuapp.com/ | https://git.heroku.com/notes-api-test.git
```

```shell
$ git remote add heroku https://git.heroku.com/notes-api-test.git
$ git remote -v
$ git push heroku master
$ heroku ps:scale web=1
$ heroku logs --tail
```

To get your Heroku API token:
```shell
$ heroku auth:token
```

## References

[Codio Tutorial](https://docs.google.com/document/d/1xPU8Dbp2qQEHA-PTQiJyEOLy30_ngOLsH1fK_Vtf-W0/edit?usp=sharing)
