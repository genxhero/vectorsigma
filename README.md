# Hedron Attack
## Background and Overview

### Motivation for project

To gain a deeper understanding of Javascript and create a product which can be proudly presented to recruiters.  This game will showcase both my coding and creative abilities.

### High level overview

Hedron Attack is an online arcade-style game starring martial artist Kam Zelfarius Ieilah.  A misunderstanding led Kam to run afoul of the Hedronites: evil sentient stone blocks with a penchant for using humans as slave labor.  After having been defeated by the Hedronites before, losing his best friend in the process, Kam returns to put an end to their threat once and for all.  


## Functionality and MVP Features
*  Blocks and Ki Orbs will fall from the sky at increasing speed and frequency
*  When an orb is caught, a counter will go up. 
*  When enough orbs are collected, the player moves on to the next level.
*  When a block collides with Kam he loses hit points.
*  Should Kam sustain enough damage, he will die and the game will end.
## Architecture and Technologies
* Canvas
    *  My primary method for rendering graphics
* Node
* Vanilla Javascript 
    
## Implementation Timeline
### Most important category

The most important thing is to the the game to work.  

### Daily breakdown
*  Monday:  Finish proposal, research and experiment
*  Tuesday: Get Kam moving left and right on the screen
*  Wednesday:  Get blocks and orbs falling
*  Thursday: Collision detection
*  Friday: Collision detection
*  Saturday:
*  Sunday: Deploy to Heroku

### Ganeplay

*  Hedronites will divebomb our plucky hero and attempt to flatten him.  In addition, power orbs will fall from the sky

*  In order to destroy the Hedron King, Kam must collect a number of Power Orbs; grab 10 Power Orbs and you win (harder than you might think as they are quite elusive).  

*  Kam begins the game with a certain number of hit points (HP).  If his hit points fall to zero, he's a goner.  

*  Power Orbs restore a little bit of Kam's health.

*  Kam also has a limited amount of ki (spirit energy) available to him which he can use to produce a projectile known as a ki blast.  

*  A Hedronite takes 3 hits to kill with a punch, and a ki blast will destroy the evil block instantly.

A: Move left
D: Move right
P: Throw a punch; Kam must be adjacent to his opponent for a punch to hit.
K: Throw a ki blast.


### Buglist
* Power Orbs still spawn on top of blocks occasionally
