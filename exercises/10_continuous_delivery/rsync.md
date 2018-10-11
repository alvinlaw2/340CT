
# Rsync

Sync two local directories and cascade delete.
```
$ rsync -avh source/ dest/ --delete
```

Sync a local `source/` directory to the `dest` directory on a remote server over SSH
```
$ rsync -a ./source uname@example.com:/dest
```