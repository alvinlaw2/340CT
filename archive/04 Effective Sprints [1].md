
# Agile Development

Each week you will be expected to complete a series of lab activities. You will be required to reflect on these in your assignment so make sure you keep records of what you have done.

This week is very important. You will be conducting your first sprint. To do this you will be expected to meet every morning to conduct your daily standup meeting (see below on how to do this) and will be expected to spend the rest of the day in your teams completing the work agreed.

You have already decided on who will be the **Scrum master** and the **product owner** and will already have prepared the **Kanban board** and **Burndown chart** which means you can dive straight into the coding.

You should refer to [this week's presentation](https://drive.google.com/open?id=1nAEwEr7C6VTcRLSTnGqzhDvFzvek8fcKZuNHcjikBBs) as well as [this short video from IBM](https://youtu.be/oHcmLKroPqw).

## 1 Conducting the Sprint

During this first sprint, your development team will need to carry out a **Daily Standup meeting** every morning. Before this meeting, the _Scrum Master_ should:

1. Check the _Kanban board_ is up to date.
2. Add up the calculated hours for all the tasks in the **Done** column on the Kanban board and use this to update the _Burndown Chart_.

```
╔═════════╦════════════════╦════════════════╦════════════════╦════════════════╗
║ Story   ║ To Do          ║ Planning       ║ Implementation ║ Done           ║
╟─────────╫────────────────╫────────────────╫────────────────╫────────────────╢
║         ║   ┌────────┐   ║                ║   ┌────────┐   ║   ┌────────┐   ║
║         ║   │        │   ║                ║   │        │   ║   │        │   ║
║         ║   └────────┘   ║                ║   └────────┘   ║   └────────┘   ║
║         ║   ┌────────┐   ║                ║                ║                ║
║         ║   │        │   ║                ║                ║                ║
║         ║   └────────┘   ║                ║                ║                ║
╟─────────╫────────────────╫────────────────╫────────────────╫────────────────╢
║         ║   ┌────────┐   ║   ┌────────┐   ║   ┌────────┐   ║   ┌────────┐   ║
║         ║   │        │   ║   │        │   ║   │        │   ║   │        │   ║
║         ║   └────────┘   ║   └────────┘   ║   └────────┘   ║   └────────┘   ║
║         ║                ║                ║   ┌────────┐   ║   ┌────────┐   ║
║         ║                ║                ║   │        │   ║   │        │   ║
║         ║                ║                ║   └────────┘   ║   └────────┘   ║
║         ║                ║                ║                ║                ║
╚═════════╩════════════════╩════════════════╩════════════════╩════════════════╝
From this Kanban board you can see that there are 2 user stories being delivered.
Three of the tasks have been completed (and so these hours come off the burndown chart).
Four of the tasks have been started but are not yet complete (this stays
on the burndown chart).
The priority should be on the tasks in the implementation column to move them
to the Done column to remove then from the outstanding work and improve the
burndown rate.
```

```
  40 ║*
     ║   *  o
  30 ║      *     o                 As you can see from this example, by the Wednesday
     ║         *                    meeting the team are behind schedule. They need to
  20 ║            *                 identify *why* this has happened:
     ║               *                * poor estimation?
  10 ║                  *             * one of the teams has hit a problem?
     ║                     *          * members of the team off sick?
  00 ║                        *
     ╚══════════════════════════    Can they make up the work by the Friday?
       M    T     W     T     F
```

During the meeting:

1. The Scrum Master reviews the burndown chart and tells the team whether they are ahead or behind schedule:
2. Now each member:
    1. explains what they have achieved since the last daily standup meeting.
    2. uses the Kanban board to identify the tasks they will work on until the next meeting (tomorrow), flags with the team responsible and moves these forward on the board.
    3. Describes any technical challenges that are holding back development work.

If any problems were identified during the standup these will need to be resolved by the appropriate team immediately **after** the daily standup. Make sure the resolution is explained to the _Scrum Master_ before continuing work.

Now each team have tasks assigned and will need to implement these before the next daily standup.

## 2 Getting Feedback

As part of the learning process you will need to conduct one of your sprints in a lab session so that your lab supervisors can watch and provide you with feedback that you can use to improve. Discuss this with your lab supervisors and agree on the session you will attend.
