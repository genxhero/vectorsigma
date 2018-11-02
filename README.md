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
* React
     * The game play area will be a series of divs upon which the canvas objects will load.  
     * A React component is needed to store the number of orbs, lives, and levels in state.  
    
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


### Buglist
* When standing at the extreme left side of the pla areaa, a block landing directly on top of the hero will not be treated as an overhead strike.  Instead it is treated as through the player were making a side strike against the block.
* Falling blocks crashing on top of land blocks will some times fail to detect the collision and will cause overlapping land blocks to spawn.  It appears to proc only when the X Coordinate of the block is less than 100
