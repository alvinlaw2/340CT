# Agile Development

Welcome to the final year **Agile Development** module. This will teach you the skills you need to work in a modern software development team. Along the way you will gain lots of experience in developing a software solution.

## Learning Outcomes

On completion of this module the student should be able to:

1. Demonstrate a sound understanding of how Agile Methodologies can be used to define users’ requirements, analysis and design of information systems.
2. Compare and contrast a range of current and emerging agile methodologies
3. Evaluate the methods, techniques and tools for rapid development of various types of information systems, and the reasons for their selection and use.
4. Use a range of appropriate tools to contribute to the development of a solution to a real-world problem.

## Teaching Materials

The teaching materials are broken into 10 labs with each labsheet containing a link to the appropriate presentation. The labs follow a 2-week cycle:

1. the first week requires you to do preparations and think about your work.
2. in the second week you will be required to work as a professional development team.

## Assessment

The assignment brief can be found [here](https://docs.google.com/document/d/1nVFiPvzr2JUlvnpQTUqGl7gcrk3CzTI_euat3zIUFDk/edit?usp=sharing).

The grading rubric is available [here](https://docs.google.com/document/d/1FgUzwn0VXYXUyjlFuhqPkvPsS8oi4R6kwyrRANDh0Mg/edit?usp=sharing).

## Module Overview

During this module you will be working in medium-sized multi-skilled development teams on a real problem. The content of the module is as follows:

1. Professional development
2. Agile planning (planning your agile project)
3. Sprint planning
4. Effective sprints (and your first sprint)
5. Automated code testing
6. Test-driven development (and the second sprint)
7. Non-functional testing
8. Advanced Git (and the third sprint)
9. Acceptance testing
10. Continuous integration (and the fourth sprint)
11. Automated deployment and exam revision
12. Continuous delivery (and the bonus sprint)

## The Team

You should already have access to the [Moodle Site](https://cumoodle.coventry.ac.uk/course/view.php?id=48328) for this module. On it you will see that you have been assigned to [a team of between 8 and 9 students](https://github.coventry.ac.uk/302CEM-1718JANMAY/TEACHING-MATERIALS/blob/master/teams/README.md). The teams contain a balance of skills that will enable you to complete the project. You should take a moment to identify the other members of your team and get in contact with them.

## The Scenario

Local authorities such as Coventry are required to monitor the environment and report their findings to DEFrA. There are a number of targets imposed by the government. At the moment the equipment to do this is expensive. There are [guidelines](https://uk-air.defra.gov.uk/assets/documents/reports/cat06/0608141644-386_Purchasing_Guide_for_AQ_Monitoring_Equipment_Version2.pdf) issued by DEFRA that explain what should be monitored and the acceptable levels as well as guidance on purchasing the equipment to carry this out.

There are two levels of monitoring:

1. General monitoring through the use of large numbers of sensors to help identify the blackspots.
2. Specialist units that can be placed in the worst blackspots that are capable of capturing a wider range of data at a higher accuracy. There is an example of this on Ball Hill. The systems are heavy, expensive and difficult to operate and are therefore only installed whre there is an existing pollution problem.

There are already companies providing solutions to point 2 but little on the market to give an overall picture.

You have been approached by an environmental monitoring company to develop the prototype of a new range of low-cost smart sensor boxe which they plan to sell to local authorities. These should capture data and send it over a wifi network to a central server. They also want a smartphone app that residents can use to find out about the pollution levels where they are, track over time and warn them if they exceed specified limits.

They would like to be able to monitor:

- Temperature
- Humidity
- Light levels
- Levels of UV
- CO2
- Airbourne dust particles
- Ambient background noise
- low frequency vibration caused by lorries, buses and aircraft

They would like to have a smartphone app to use the data in the following ways:

- Map of the area with overlays showing pollution levels.
- Summary of the pollution in the user's current location mapped against acceptable norms
- alerts if pollution exceeds the agreed levels.

## Git Tags

```
$ git tag -a 1718JANMAY 9b89d29 -m "1718JANMAY"
$ git push --tags origin master
```
