
# Continuous Integration

Each week you will be expected to complete a series of lab activities. You will be required to reflect on these in your assignment so make sure you keep records of what you have done. This lab will include your third sprint and will bring together many of the topics already covered.

You should refer to [this week's presentation](https://drive.google.com/open?id=16zG4yQJBIRq8SfnK8749vnE-rsmDMSchQRa73TOQtDI).

There is an example repository on [GitLab](https://gitlab.com/covcom/continuous-integration-example)

## 1 Configuring Continuous Integration

In the previous sprint you used the **Pull Request** mechanism to integrate code into the master branch. In this sprint you will _replace_ this with the process of _Continuous Integration_. These two approaches are non-complimentary and each has its pros and cons. By the end of this sprint you will have a good understanding of these.

Your team should already have a suite of tests for both _functional_ and _non-functional_ requirements for each component in your project and, in this lab, you will be using these to build a **Continuous Integration Pipeline** using the tools integrated into _GitLab_.

The restrictions are that you can only use tests that return either pass or fail and have a non-zero code on failure. This should include:

1. Linters.
2. Unit tests.
3. Module dependency tests.
4. Code duplication checks.
5. Code coverage checks (if there is an option to specify thresholds).

You will need to create a `.gitlab-ci.yml` file in the root directory of your project which will be detected by GitLab and run each time you push your code. These are lots of examples available for you to learn from, both in the `exercises/08_ci/` directory and online. Make sure the _CI Pipeline_ is correctly configured by pushing both good and bad code before starting your third sprint.

You will also need to configure GitLab to only allow merging if all tests have passed. In this way you can bypass the requirement for the code to be reviewed by the Scrum Master which should speed up the process of integrating code into the Master branch.

### 1.1 Examples

To help you configure your GitLab CI pipeline there are a couple of sample repositories you should be studying which cover most of the platforms you are developing for:

1. [ci-arduino](https://gitlab.com/covcom/ci-arduino) shows how to build a CI pipeline using the [PlatformIO](https://platformio.org) tools.
2. [ci-nodejs](https://gitlab.com/covcom/continuous-integration-example) shows how to build a CI and CD pipeline for a NodeJS API.

### 1.1 Continuous Integration and Arduino Code

The challenge for carrying out unit and integration tests for Arduino code is that it has to run on a server rather than on a physical microcontroller. There are links to useful web resources in the `exercises/08_ci/arduino/` directory.

A good starting point is to base your build on the dedicated [Docker Arduino Environment](https://hub.docker.com/r/strm/dev-arduino/).

## 2 Planning the Third Sprint

As a team:

1. Decide who will be the **Scrum Master** and the **Product Owner**.
2. With the client present, discuss the remaining stories on the user story map:
    1. Remove any stories that are no longer relevent.
    2. Add user stories to reflect any additional functionality identified by the client.
3. re-prioritise the user stories by moving them up or down the user story map.
4. Identify what can be achieved in the next sprint and draw a horizontal line across the user story map to clearly identify this.
5. Take each of these user stories and, with the client present:
    1. The product owner describes it from the user's perspective
    2. The team and client discuss how it can be implemented and work collaboratively on a whiteboard/flipchart to define it's UI until the client/product owner is satisfied/
6. Once the client has left:
    1. Break the story into the component tasks and write these on sticky notes.
    2. Use planning poker to estimate how many hours each task will take (split any tasks that you estimate will take more than 4 hours).
    3. Create a new Kanban board with 5 columns: to do, write tests, implementation, refactoring, done.
    4. Move any tasks you didn't complete in the first sprint onto this new board.
    5. Add the new tasks for this sprint to the left column of your new Kanban board.
    6. Draw up a fresh burndown chart for the current sprint.

## 3 Daily Standups

Since you have already completed two sprints, the steps below are brief summaries. For more information refer to the lab activities from the previous sprint.

1. Scrum Master reviews the Kanban board and updates burndown chart.
2. Scrum Master starts meeting with update on development velocity/progress.
3. Each person describes:
    1. What they have done since last meeting.
    2. Identifies tasks they will now work on.
    3. Flags up issues (resolved after the meeting).

## 4 Development Process

1. Create a local feature branch if the task is new and push to remote.
2. Rest of team pull the branch and switch to it then run existing test suites.
3. Write **unit tests** and **integration tests** to define new functionality.
4. Now code should be written to pass the tests making sure all the **non-functional tests** such as the _linter_ and _code duplication checker_ still pass.
5. Once local tests pass:
    1. code should be pushed to remote (triggering CI tests).
    2. Code changes should be pulled from the master branch.
7. Now the branch can be merged into the master branch:
    1. Create a pull request on GitLab.
    2. If all the tests have passed on both branches you can merge the code.
    3. Delete the feature branch if the feature is complete.

## 5 Review Meeting

You will be given a date for the review meeting, this will typically be a week after the start of the sprint. During this meeting you will be expected to do a local demo of the software you built during the sprint so make sure you are prepared.

1. The **Product Owner** reads the user story/storys completed during the sprint.
2. The **Scrum Master** demonstrates the new features to the client.
3. Any bugs identified are added to the Kanban board to be addressed in the next sprint.

The team then move on to the next _sprint planning meeting_ whilst the client is present.

## 6 Retrospective

Each week the development team should meet up (without the client) and ask each member of the team to identify:

1. What they should continue to do (existing good practice)
2. What they should **start** doing (new good practice)
2. What they should **stop** doing (eliminiate bad practices)
