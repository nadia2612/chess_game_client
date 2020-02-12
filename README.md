# Multipalayer Chess game 

## [Check out the deployed version here !](https://lets-play-chess.netlify.com/)
This is a client part of Multiplayer chess game
This application provides a convenient a convenient way to playing chess online.

A backend part can be found [here](https://github.com/nadia2612/chess_game_server)

## Overview 
###  List of games
<img width="1642" alt="Screenshot 2020-02-01 at 21 44 06" src="https://user-images.githubusercontent.com/54640808/74375676-0da32f00-4de1-11ea-8927-222899cc9ede.png">

Shows :
 * List of games. 
* If you logged in you can create a new game or join an existing game.

### Game page

<img width="1653" alt="Screenshot 2020-02-12 at 21 50 38" src="https://user-images.githubusercontent.com/54640808/74376089-ca958b80-4de1-11ea-997c-b01b720f5e6c.png">
<img width="1642" alt="Screenshot 2020-02-01 at 21 44 56" src="https://user-images.githubusercontent.com/54640808/74375887-6ffc2f80-4de1-11ea-80e9-250e77846e42.png">

Shows:
* Join game buttons.
* After two players joined the game, you can make the first move.
* On top you can see game-related information like game ID, whose turn it is now and the color of players.
* Every step is validated and an appropriate validation message is shown if player is trying to make the wrong turn.

<img width="1642" alt="Screenshot 2020-02-01 at 22 50 03" src="https://user-images.githubusercontent.com/54640808/74378481-53162b00-4de6-11ea-9a3a-c7ec387ef1ca.png">

### Authentication

It is possible to register a new user and log in with an existing one.

## Technologies used

This application is built using the following libraries:
-  React
-  React-router
-  Redux
- Redux-thunk
- Superagent

##  Spinning up
To spin up a local version of this application please follow the following instructions: 

1.  Clone the project  
    `$ git clone git@github.com:nadia2612/chess_game_client.git`
2. `$ cd chess_game_client`
2.  Run `npm install`
3. The frontend sends requests to the backend deployed to [Heroku](https://chess-game-1.herokuapp.com).
If you want to install the backend for this app locally
clone this [repo](https://github.com/nadia2612/chess_game_server) and follow the instructions to spin up the server.
Change `baseUrl` in '/src/actions.js' and `url` in  'src/App.js' in the frontend to your local sever's URL
4.  Start the client using `npm run start`.

