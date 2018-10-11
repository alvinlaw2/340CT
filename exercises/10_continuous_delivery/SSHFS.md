
# Mounting a Remote Filesystem

Need to use Secure Shell Filesystem (SSHFS)
```
sudo apt-get install sshfs
```
Next we create a local directory where we want to mount the remote filesystem. It is recommended to always mount filesystems under the `/mnt/` directory on the host system. The second use of sshfs shows how to login using ssh key authentication. The final command shows how to unmount the remote file system using `umount`.
```
$ sudo mkdir /mnt/myproject
$ sudo sshfs -o allow_other,defer_permissions username@example.com:/ /mnt/myproject
$ sudo sshfs -o allow_other,defer_permissions,IdentityFile=~/.ssh/id_rsa username@example.com:/ /mnt/myproject
$ sudo umount /mnt/myproject
```
If you want to permanently mount the remote filesystem (this might create a potential security risk) you need to edit the `/etc/fstab` file and add the new connection to the end.
```
sshfs#username@example.com:/ /mnt/myproject
```