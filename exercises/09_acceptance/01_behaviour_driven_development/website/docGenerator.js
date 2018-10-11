
'use strict'

const gherkindoc = require('gherkindoc')
// use the features/ directory as the input
// save pages in the /docs/features/ directory
gherkindoc.generate('features', 'docs/features/')

/*
Installation Instructions:
1. Make sure you have the latest version of NodeJS installed (8.8.1 at the time of writing)
2. Use terminal to navigate to the location of the features directory (but not inside it)
3. Install the gherkindoc module
4. Run the testRunner.js script
*/