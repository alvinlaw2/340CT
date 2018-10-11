
# Sprint Planning

Each week you will be expected to complete a series of lab activities. You will be required to reflect on these in your assignment so make sure you keep records of what you have done.

You should refer to [this week's presentation](https://drive.google.com/open?id=1GUZTf_4yCVUBWiOS3ACQ8ngkEFak7mZy9lzYwDWePq0).

In this worksheet you will be carrying out the initial planning which needs to take place before the first _sprint_ which will be next week. This will allow you to focus next week on the development of good quality code.

## 1 Reviewing the CPD Plan

Back in the first lab each member of your team created a **continous professional development** (CPD) plan where they identified the skills they needed to learn before the first sprint. Since the first sprint starts next week its time to review each of the plans. Split into pairs (or groups of 3) and within each group, print out copies of the plans and go through them, checking off any parts that have been completed and agreeing a suitable date (and some resources) to ensure each member of the team is ready for the first sprint.

## 2 Sprint Planning

As a team:

1. Identify who will be the **Scrum Master** and who will be the **Product Owner**.
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

### 2.1 The Kanban Board

For this first sprint, your Kanban board should have a row for each of the user stories you have chosen to deliver and 4 columns as shown:

```
╔═════════╦════════════════╦════════════════╦════════════════╦════════════════╗
║ Story   ║ To Do          ║ Planning       ║ Implementation ║ Done           ║
╟─────────╫────────────────╫────────────────╫────────────────╫────────────────╢
║         ║   ┌────────┐   ║                ║                ║                ║
║         ║   │        │   ║                ║                ║                ║
║         ║   └────────┘   ║                ║                ║                ║
║         ║   ┌────────┐   ║                ║                ║                ║
║         ║   │        │   ║                ║                ║                ║
║         ║   └────────┘   ║                ║                ║                ║
╟─────────╫────────────────╫────────────────╫────────────────╫────────────────╢
║         ║   ┌────────┐   ║                ║                ║                ║
║         ║   │        │   ║                ║                ║                ║
║         ║   └────────┘   ║                ║                ║                ║
║         ║   ┌────────┐   ║                ║                ║                ║
║         ║   │        │   ║                ║                ║                ║
║         ║   └────────┘   ║                ║                ║                ║
╚═════════╩════════════════╩════════════════╩════════════════╩════════════════╝
```

At the start of the sprint, all tasks should be in the **To Do**. By the end of the sprint, all tasks should be in the **Done** column.

### 2.2 The Burndown Chart

Here is an example of a burndown chart showing the line of optimal development. In this example the sprint lasts from Mon to Fri and there are an estimated 40 hours of development. It shows that the optimum burn rate would be 10 hours per day.

```
  40 ║*
     ║   *
  30 ║      *
     ║         *
  20 ║            *
     ║               *
  10 ║                  *
     ║                     *
  00 ║                        *
     ╚══════════════════════════
       M    T     W     T     F
```

## 3 GitLab

In previous modules you have been using the GitHub Enterprise repository within the University but there for this one you will be using [GitLab](https://gitlab.com). As part of this week's labs you should configure GitLab for your team so you are ready to start development next week.

1. Everyone needs to create accounts on the [GitLab](https://about.gitlab.com) server.
2. Upload a head and shoulders photo of yourself into your GitLab profile so that everyone knows who you are.
3. Each organisation should be set up as a [group](https://gitlab.com/dashboard/groups) which is used to organise your repositories, set one up now for your team.
    - Create and upload an **avatar** for the group using the **Settings** tab.
4. Use the **Members** tab to add the team members to your group, assigning appropriate permissions (note that the permissions are _not_ the same as those used in GitHub so make sure you understand these clearly).
5. Create repositories for each part of the project, using a logical naming convention and upload an **avatar** for each repository using the **Settings** tab:
    1. A repository for the microcontroller code.
    2. A repository for yor API code.
    3. A repository for each of your clients (web, iOS, android) depending on the choices made by your team.
6. Clone the repositories onto your development workstations.
7. Update the local `git config` in each of you cloned repositories:
    1. Navigate to the cloned repository.
    2. update your name `git config user.name "John Doe"` and email `git config user.email "johndoe@gmail.com"`. These must match those you used when creating your GitLab account.
    3. Update the default commit message editor from `vi` to `nano` using `git config core.editor "nano"`
    4. check the _local config_ `less .git/config` which should show you that you have updated the local settings.

Here is a typical `.git/config` file:

```
[core]
        repositoryformatversion = 0
        filemode = true
        bare = false
        logallrefupdates = true
        ignorecase = true
        precomposeunicode = true
        editor = nano
[remote "origin"]
        url = https://gitlab.com/team-fox/api.git
        fetch = +refs/heads/*:refs/remotes/origin/*
[user]
        name = John Doe
        email = johndoe@gmail.com
```

The `less` command allows you to view and navigate the contents of a file. You should check the [documentation](https://en.wikipedia.org/wiki/Less_(Unix)) to learn how to navigate up and down the file and (most importantly) how to quit!

### 3.1 Interacting with Git

The main way you should use to work with Git are the _shell commands_ you enter using the _terminal_. Whilst you should be comfortable using these commands you might want to use a more graphical tool for day-to-day Git operations. There are many options however you should investigate:

- Code editor Git integration: most modern code editors such as [Visual Studio Code](https://code.visualstudio.com) either come preconfigured with Git integration or it can be added as a plugin. These tools, whilst ideal for basic git work don't have the capability to run the more powerful commands.
- Standalone Git tools: whilst there are a lot of these, many (such as the one available from GitHub) are not easy to use and you may cause issues with your repository. One of the ones recommended is [GitKraken](https://www.gitkraken.com) which although has a cost attached is free for academic use.

### 3.1 Ignoring Files

As you develop your code you will be adding and generating files that have no place in the repository. These might include:

1. Third-party libraries.
2. Compiled binary files.

Create a file in the repository directory, this file should be called `.gitignore` (notice the leading full stop character). In it you list all the directories and files that should be ignored by Git. here is a simple example:

```
node_modules/
libraries/
*.exe
*.hex
.DS_Store
```

In this example we want git to ignore any directories called `node_modules/` or `libraries/` as well as any files with an `.exe` or `.hex` file extension. It also ignores the hidden files that MacOS uses to organise the directories.

## 4 Next Steps

You are now ready to conduct your first sprint which will start first thing on Monday morning. Make sure you clear your schedules as much as possible and as a group decide where you will meet up for your first daily standup early on Monday morning. The instructions for conducting this meeting are detailed in the next worksheet.

### 4.1 Places to Meet

For an effective sprint you need to be meeting and working together all next week. Suggestions for suitable places to meet could be:

1. The cafe in the EEC building or in town.
2. The seating in the Student Hub (beanbags or cubicles). or in the coffee shop or eating areas.
