
# Secure Shell

This is how you use SSH to connect to a remote server. Unless you have set up your public/private key pair you will be prompted for a password. If this is the first time you have connected to the server you will be asked to confirm the identify of the server.

1. Notice how the prompt changes, this shows that the commands will be run on the remote server.
2. Assuming your server is running Linux you can now run commands on the remote as if you were accessing it locally.
3. When you log out of the remote using the `exit` command you will return to your local shell.
```
$ ssh username@example,com
  The authenticity of host 'example.com (xxx.xxx.xxx.xxx)' can't be established.
  RSA key fingerprint is f9:9b:06:11:75:d4:1f:d1:3c:51:0d:22:4a:13:ff:9f.
  Are you sure you want to continue connecting (yes/no)  _

  username@example.com's password: 
  
  The programs included with the Debian GNU/Linux system are free software;
  the exact distribution terms for each program are described in the
  individual files in /usr/share/doc/*/copyright.

  Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
  permitted by applicable law.
  example.com@XX:~$ exit
$
```
The first time you connect you will be asked to confirm the authenticity of the server you are connecting to. By doing this you will be adding the server's public key to the file `~/.ssh/authorized_keys`. If you later rebuild the server this will change its public key and you will need to delete the old entry from this file before you will be able to connect!

## Generating Key Pairs

```
$ ssh-keygen
  Generating public/private rsa key pair.
  Enter file in which to save the key (/Users/marktyers/.ssh/id_rsa): 
  Created directory '/Users/xxx/.ssh'.
  Enter passphrase (empty for no passphrase): 
  Enter same passphrase again: 
  Your identification has been saved in /Users/xxx/.ssh/id_rsa.
  Your public key has been saved in /Users/xxx/.ssh/id_rsa.pub.
  The key fingerprint is:
  SHA256:cyqtNFo3C0Q4sAOezEUI+l9siNdW2ih0BqPmSiM7KYo xxx@xxx
  The key's randomart image is:
  +---[RSA 2048]----+
  |+ +oo            |
  |=oo+ +           |
  |.== + + .        |
  | + + O =         |
  |.o+ + X S .      |
  |o+.o * . +       |
  |*   . * =        |
  |+.   + * o       |
  |E   . . .        |
  +----[SHA256]-----+
$
```
This generates a hidden directory `~/.ssh/` that contains two important files:

1. A _private_ key `~/.ssh/id_rsa`
2. a _public_ key `~/.ssh/id_rsa.pub`
