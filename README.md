# Lifepass

An application to improve productivity and savings by self imposing budget restrictions and rewards for productive behavior.

## Overview

I got the idea for this app while playing Genshin Impact. I realized the Battle Pass system used in that game could also be utilized in an app to provide positive reinforcement for completing tasks.

After multiple iterations, I reached the final design of the app being about expense control. You allocate a budget for yourself for the duration of a pass (Typically 2 months) and unlock the ability to spend by completing tasks.

Of course, the app is about self imposed restrictions and promoting restraint. It does not lock any real money away from the user. They are free to cheat and spend the money they have allocated for the pass, or claim tasks that have not been completed. But the goal of the app is not to restrict the user. It is only to help the user control themselves. Failure is part of the process.

I chose this design because I believe it will prove to be helpful in my own personal life.

## Target Definition

The app has a very niche target of individuals trying to manage their personal spendings without conforming to strict restrictions.

## Design Specifications

The app infrastructure consists of a backend server connected to a database of users and their respective tasks. The server is responsible for running tasks on set intervals to reset the task completion status and maintain the user data. The server also acts as an API to send requested user data to client applications.

Client applications are the front end applications responsible for communicating with the server to perform the user's required tasks (updating user data, completing tasks, etc.).

A Firebase backend or a LocalStorage based pure frontend application was considered but the aim of this project is to learn full stack development so this design was chosen.

## Mockups

### Low Fidelity

### High Fidelity

## Requirements

### Hardware

- Any Desktop/Laptop/Mobile device

### Software

- Any web browser

## Future Updates

## References
