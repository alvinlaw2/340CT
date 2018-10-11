
# Non-Functional Testing

Lets start by adding a suite of tests to improve the general code quality. These won't test how well the code solves the user stories. Refer to the [lecture slides](https://drive.google.com/open?id=1TAyjgDdy-812mwhqrRCVT_MPNhvwApjsAJACmaSqSV8).

## 1 Review Meeting

You will be given a date for the review meeting, this will typically be a week after the start of the sprint. During this meeting you will be expected to do a local demo of the software you built during the sprint so make sure you are prepared.

1. The **Product Owner** reads the user story/storys completed during the sprint.
2. The **Scrum Master** demonstrates the new features to the client.
3. Any bugs identified are added to the Kanban board to be addressed in the next sprint.

## 2 Sprint Planning

As a team:

1. Identify who will be the **Scrum Master** and who will be the **Product Owner**, perhaps you can rotate the jobs to other members of the team?
2. Ideally with the client present, take the first user story from the top row of your user story map:
    1. The product owner describes it from the user's perspective
    2. Discusses how it can be implemented and work collaboratively on a whiteboard/flipchart to define it's UI until the client/product owner is satisfied/
    3. Explain the success criteria (how will the team know they have completed the story implementation.
3. Once the client has left:
    1. Break the story into the component tasks and write these on sticky notes.
    2. Use planning poker to estimate how many hours each task will take.
        - If the estimated time for a task is longer than 4 hours, consider splitting the task down.
    3. Add them to the left column of your Kanban board.
    4. Finally the _Scrum Master_:
        1. adds up the estimated durations for the tasks on the Kanban board and
        2. draws out a burndown chart:
            1. The X axis should show the days in the sprint.
            2. the Y axis should show the combined duration.
        3. draws a staight line from the top of the Y axis to the end of the X axis to indicate the optimal burn rate.

## 3 Retrospective

Each week the development team should meet up (without the client) and ask each member of the team to identify:

1. What they should continue to do (existing good practice)
2. What they should **start** doing (new good practice)
3. What they should **stop** doing (eliminiate bad practices)

## 4 Linting

It can be tough for development teams to format their code in a consistent way: naming of variables and constants, extra whitespace, irregular indentation, and other “sloppiness” then often leads to actual bugs in the program.

1. Install and run a suitable linter on the source code using its default settings.
    - what errors and warnings does it flag up?
    - are these easily fixable?
2. Can you find a plugin for your IDE so that the errors and warnings are flagged up in your editor?
    - install the plugin and make sure it is highlighting the errors and warnings.
3. Most linters are configurable through a settings file.
    1. Create a simple settings file and make sure it is being read when the linter runs.
    2. Review the rules that can be customised and, in your team, decide on the agreed set of rules.
    3. Now use the linter output to ensure your code adheres to these rules.

Whilst strictly not part of the _linting_ process, if you are using a _compiled language_ a good test is whether each source code file **compiles** correctly!

## 5 Code Duplication

The **Don't Repeat Yourself** (DRY) principle states that you should not have duplicate code scattered around your project as it makes it harder to find and fix bugs, but how can you check this?

There are tools for all main programming languages that can flag up duplicate code across an entire project.

1. Install a suitable tool that supports your language.
2. Run the tool using the default settings.
    - does it flag up any code duplication?
    - if so, can you locate this based on the information it provides?
    - can this duplication be removed?
3. Most code duplication tools can be customised either through flags or a configuration file.
    1. Look at the documentation and identify how to customise the tool.
    2. Change some settings (for example the min lines) and run the tool.
        - are the results more or less useful?
    3. As a team, decide on the settings you will be using and make sure they are used consistently for the remainder of the project.

## 6 Checking Dependencies

Every time you import a library/framework into your project it gets added to the codebase which means it takes longer to run the program and the size of the code increases. For this reason you should not be importing any dependency that you don't use.

There are dependency checkers for most languages that can flag any imported module/library/framework which is not used in the code.

1. Install a suitable tool that supports your language.
2. Run the tool and check any warnings/errors it generates.
3. Remove the unused modules/libraries/frameworks.
4. Run the tool again and repeat until no errors are reported.

In some languages, all dependencies have to be recorded in a configuration file such as `package.json` in the case of NodeJS scripts. In these cases, by using different flags, the tool can:

1. Identify any packages that are defined in config file and not used.
2. Identify any packages that are installed but not recorded in the config file.

If you are using a language that uses a config file you should run these two additional tests.

## 7 Profiling

Software profiling is a dynamic program analysis that measures, for example, the space (memory) or time complexity of a program, the usage of particular instructions, or the frequency and duration of function calls.

Profiling is normally used to improve program optimization and is achieved by instrumenting either the program source code or its binary executable using a tool called a **profiler**.

Most mainstream languages include a profiler:

1. Learn how the profiler works for your particular language, you may find some useful information in the `exercises/05_code_quality/04_profiling/` directory.
2. Activate the profiler.
3. Run your program.
    - If appropriate, use a tool such as Apache Bench to simulate a load on your system.
4. This should have generated a **tick file**.
    - use a suitable **tick interpreter** to analyse this data.
    - Does it reveal any useful information about your program?
5. Can you use this data to improve your program?

# 8 Software Complexity Analysis

The final step is to generate a report into the relative complexity of different parts of your system using the appropriate software complexity analysis tool for your chosen language.

1. Identify the parts that have a relatively high complexity and find ways to refactor your code to reduce these.
2. Keep a record of the complexity score and use this to identify where changes have increased the complexity of a module. This may indicate poor architecture or code.
