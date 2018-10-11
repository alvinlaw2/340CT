
# BDD Acceptance testing Website

Make sure the latest Chrome browser is installed.

Make sure the latest version of NodeJS is installed.
```shell
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
source ~/.bashrc
nvm list-remote
nvm install 7.5.0
```
Navigate to this directory and install required packages then run cucumber:
```shell
npm install cucumber selenium-webdriver chromedriver
./node_modules/.bin/cucumber-js
  Feature: Example feature

      As a user of Cucumber.js
      I want to have documentation on Cucumber
      So that I can concentrate on building awesome applications

    Scenario: Reading documentation
    ✔ Given I am on the Cucumber.js GitHub repository
    ✔ When I click on "CLI"
    ✔ Then I should see "Running specific features"

  1 scenario (1 passed)
  3 steps (3 passed)
  0m03.953s
```

## Useful References

https://www.custardbelly.com/blog/blog-posts/2014/01/08/bdd-in-js-cucumberjs/

https://dzone.com/articles/getting-started-with-cucumberjs-on-nodejs

https://www.npmjs.com/package/selenium-cucumber-js

https://github.com/john-doherty/selenium-cucumber-js

https://www.npmjs.com/package/webdriverio-cucumber-js

https://github.com/larryg01/webdriverio-cucumber-js
