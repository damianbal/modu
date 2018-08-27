# Modu.js
> Modern Game Framework for Web

![](modu.png)

## Features

* Modular, easy and elegant
* Built-in components to make games with ease
* Lightweight

## Installation

Download this repository as zip or clone it, then run 

```sh
npm install
```

You need to have parcel-bundler installed, and when you got it then run following commands 
```sh
npm run build # builds game in dist directory
npm run serve # serve game with php -S, access game at localhost:1234
```

## Getting Started

See provided example code in game directory, to see how to make games with Modu.

[Demo](http://portfolio.damianbalandowski.com/modujs/)

Demo is included with this repository, example "game".

#### Built-in components

* TransformComponent - used for position and rotation.
* SpriteComponent - this is what you see on screen.
* PhysicsComponent - collision, gravity, etc..
* ControllerComponent - move entity in direction, rotate so it is facing another entity, etc.. look up source to see more
* AnimatorComponent - animates your sprite (WIP)

#### Roadmap

* UI components: Button, Label
* Particle system
* Camera system
* Fixes 

### Assets

All of your assets should be in dist/assets directory.

* dist/assets/sfx - sound
* dist/assets/gfx - graphics
* dist/assets/misc - all other assets

### System

System manages all of the entities, game world, all of the system components, System is also a State.

#### How to change a current system?

```javascript
this.getManager().setSystem('system_name_here')
```

### Entities

Entity is a game object, entity examples: Player, Zombie, Spaceship, Ball, etc...

Each entity can have components, and events sent by System and it's components.

If your entity is simple, you can put in EntityFactory and create it with EntityBuilder

### Components

Components extend Entity, there is few built-in components but you can create your own if you wish, example can be InventoryComponent which contains health, power and later it can be added to any Entity and accessed via getComponent method in Entity.

If you wish components can have methods which do something with entity or it's components. Later you can call those methods in any Entity events, for example 'onCollisionStart'.

## Meta

Damian Balandowski – balandowski@icloud.com