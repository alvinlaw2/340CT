
# File Transfer Protocol

Simple example of an FTP session. Notice:

1. The prompt changes from `$` to `ftp>` when using the interactive tool.
2. Commands can modify both the local and remote filesystems:
    1. remote commands match those used in the _bash_ shell, such as `cd`.
    2. local commands have an `l` prefix, such as `lcd`.
3. Files are pushed from local to remote using the `put` command.
4. Files are pulled from the remote using the `get` command.
5. wildcards, such as `*` can be used to transfer multiple files.
```
$ cd mywebsitedir
ftp://username:password@www.example.com
ftp> put index.html
ftp> lcd css								# prefix local commands with 'l'
ftp> cd css
ftp> mput *								    # transferring multiple files
ftp> ls -l								    # listing the remote files
ftp> get index.html
ftp> quit
$
```
For a secure connection substitute the `sftp` command.