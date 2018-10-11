
## Environment Variables

There are a number of environment variables already configured on a server.

1. Use the `printenv` command to list them all.
2. Individual variables can be printed by prefixing them with the `$` symbol.
```
$ printenv
  SHELL=/bin/bash
  TERM=xterm-256color
  LANG=en_GB.UTF-8
$ echo $SHELL
  /bin/bash
```

## Adding Environment Variables

You can add as many of these as you wish by adding a new `export` line to the appropriate config file. In this example we are adding an enviromnment variable called `PORT`.
```
export PORT=8080
```
This can be added to one of two config files:

1. Edit the hidden `~/.profile` file if you only want the environment variable for the current user.
2. Edit the `/etc/profile` file for environment variables that can be accessed system-wide by all users.

## Accessing Environment Variables

Environment variables can be read in most programming languages. Here are some code snippets showing how this is done in some of the more popular languages.

### Python
```python
import os
shell = os.environ['PORT']
print(shell)     # prints 8080
```

### C++
```cpp
#include <cstdlib>
#include <iostream>
char *home(getenv("PORT"));
std::cout << home << std:endl;     /* prints 8080 */
```

### NodeJS
```javascript
let shell = process.env.PORT
console.log(shell)     // prints 8080
```

### Java
```java
String shell = System.getenv("PORT");
System.out.println(shell);     // prints 8080
```

### PHP
```php
$shell = getenv('SHELL');
echo($shell);     // prints 8080
```