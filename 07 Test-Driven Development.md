
# Test-Driven Development

Each week you will be expected to complete a series of lab activities. You will be required to reflect on these in your assignment so make sure you keep records of what you have done.

You should refer to [this week's presentation](https://drive.google.com/open?id=1mqtXeAPd0uhShlDuvd4G25thJHE-AdHOEB-qwf-anB8).

In your first sprint we focussed on the **Scrum Metholology**. In this second sprint we will continue using _Scrum_ but will now integrate the skills, tools and techniques we learned last week into a concept called **Test-Driven Development** (TDD).

For this to work you need a modularised code base for each aspect of your product with all code covered by comprehensive unit and integration tests with 100% coverage. If this is not the case, go back to last week's lab worksheet and complete these exercises.

## 1 Conducting the Sprint

In this second sprint you will be adopting some additional agile concepts:

1. Feature branches (each task on the Kanban board should be developed in its own branch).
2. Implement **Test-Driven Development**:
    1. Write a _test list_ to define the functionality.
    2. Convert these into unit tests.
    3. Write code to pass the tests.
    4. Refactor the code, ensuring all tests still pass.
3. Pair programming (during the sprint, each member of the team should spend at least 2 days working with another member of the team using the _pair programming_ technique).

These extra skills will initially _slow your development process down_ as you get to grips with them however eventually you will see improvements both in the _velocity of development_ and in the _overall quality of the code_ your team are producing. To support this new workflow you will need to modify your Kanban board by adding some additional columns. These were explained in the lecture and you will be given detailed instruction in this worksheet. Make sure you replace any tasks on the new board.

```
╔═══════╦═══════════╦═══════════╦═══════════╦═══════════╦═══════════╦═══════════╦═══════════╗
║ Story ║ To Do     ║ Plan      ║ Tests     ║ Implement ║ Refactor  ║ Regressn  ║ Done      ║
╟───────╫───────────╫───────────╫───────────╫───────────╫───────────╫───────────╫───────────╢
║ A     ║ ┌───────┐ ║           ║           ║           ║           ║           ║           ║
║       ║ │   a   │ ║           ║           ║           ║           ║           ║           ║
║       ║ └───────┘ ║           ║           ║           ║           ║           ║           ║
╟───────╫───────────╫───────────╫───────────╫───────────╫───────────╫───────────╫───────────╢
║ B     ║           ║           ║           ║ ┌───────┐ ║           ║           ║           ║
║       ║           ║           ║           ║ │   b   │ ║           ║           ║           ║
║       ║           ║           ║           ║ └───────┘ ║           ║           ║           ║
╟───────╫───────────╫───────────╫───────────╫───────────╫───────────╫───────────╫───────────╢
║ C     ║ ┌───────┐ ║           ║           ║           ║           ║           ║           ║
║       ║ │   c   │ ║           ║           ║           ║           ║           ║           ║
║       ║ └───────┘ ║           ║           ║           ║           ║           ║           ║
║       ║ ┌───────┐ ║           ║           ║           ║           ║           ║           ║
║       ║ │   d   │ ║           ║           ║           ║           ║           ║           ║
║       ║ └───────┘ ║           ║           ║           ║           ║           ║           ║
╚═══════╩═══════════╩═══════════╩═══════════╩═══════════╩═══════════╩═══════════╩═══════════╝
```

## 3 Daily Standup Meeting

Your development team will still need to carry out a **Daily Standup meeting** every morning. Before this meeting, the _Scrum Master_ should:

1. Check the _Kanban board_ is up to date.
2. add up the hours for all the tasks remaining incomplete on the Kanban board and using this to update the _Burndown Chart_.

The Scrum Master needs to make sure everyone is engaged in the process. Adopt the following policy:

1. Everyone should be there at the agreed time. Anyone delayed must phone the Scrum Master and the meeting postponed until they are there.
2. Everyone should be standing around the information radiators (whiteboard/flipchart).
3. Phones stay in pockets. meeting paused if anyone uses a phone (they are not focussed).
4. Laptops only to be used to demonstrate functionality.

During the meeting:

1. The Scrum Master reviews the burndown chart and tells the team whether they are ahead or behind schedule:
2. Now each member:
    1. explains what they have achieved since the last daily standup meeting, running the  **acceptance test suite** and **unit test suite** to demonstrate this.
    2. uses the Kanban board to identify the tasks they will work on until the next meeting (tomorrow), flags with the team responsible and moves these forward on the board.
    3. Describes any technical challenges that are holding back development work.

If any problems were identified during the standup these will need to be resolved by the appropriate team immediately **after** the daily standup. Make sure the resolution is explained to the _Scrum Master_ before continuing work.

Now each team have tasks assigned and will need to implement these before the next daily standup.

### 3.1 Development Process

Once the tasks have been agreed the teams should immediately start working on them. The process is much more structured than the one used in the previous sprint. Make sure you follow each step carefully. The task should be moved across the Kanban board according to the instructions.

In this sprint you will be using a technique called **pair programming** whereby you will be developing the code in pairs with one person writing the code (the _driver_) and the other person checking it and making suggestions for improvement (the _navigator_). Switch the roles every 30 mins.

1. The developer picks a task to work on from the **ToDo** column:
    1. They write their initials on the task and move it to the **Plan** column.
2. A local feature branch is created if the task is new. This should be given a logical name such as `feature-xxx`.
    1. This new branch should be _pushed_ to the remote so it can be seen by the rest of the team.
    2. Everyone working on the feature should pull the branch and switch to it.
3. The developer decides how it should be implemented, these plans should be shared with the rest of the team to get feedback.
    1. They now move the task to the **Tests** column.
4. A set of **unit tests** and **integration tests** should be written to define the new functionality.
    1. The tests should be run and seen to fail (we have not written the functionality yet).
    2. The task is now moved to the **Implement** column.
5. Now code should be written to pass the tests.
    1. Configure your development environment to automatically run the tests every time you modify a file and save.
    2. Once all the tests pass you should run your code coverage tool. If you don't get 100% coverage you will need to write additional tests.
    3. Once you have implemented the functionality and checked for 100% code coverage move the task to the **Refactor** column.
6. Once the unit and integration tests pass and you have 100% code coverage it will need to be tidied up (refactored).
    1. Study the code and identify ways it can be tidied up and made easier to understand.
    2. Keep running the tests to make sure the refactoring doesn't break the code.
    3. Once the code has been cleaned up and the tests still pass move the task to the **Regression** column.
7. Now the branch can be merged into the master branch:
    1. Switch to the master branch.
    2. Merge the feature branch into the master branch.
    3. Delete the feature branch.
