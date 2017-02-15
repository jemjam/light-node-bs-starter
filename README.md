# Node.js Battlesnake Starter

Battlesnake is a computer AI programming competition where participants create
a snake AI to battle it out. Snakes are created as web servers that respond to
simple POST requests. Each request submits the data of the current game board
state, and then the snake responds with a move one of four directions.

## Getting Started

To use this starter snake, you'll need a Node.js javascript environment and to
fork this repo. On github, click the fork button, and when you've created your
copy clone it down and start working.

Once you have the files on your local machine, you can install dependencies.
```
# Install dependencies with either Yarn or NPM
$ yarn
# -or-
$ npm install
```

And then you can run the app with the `start` script (or manually via node)

```
$ yarn start
# -or-
$ npm start
# -or-
$ node index.js
```

As you make changes to the repo, you'll make new commits and push your code
back up to your forked repo.

## Deploying

Running the snake locally on your machine is great for trying things out, but
on the day of the competition you'll probably want your snake running on a real
server somewhere.

### Heroku

Heroku is a great choice for hosting simple apps as they take all the
complexity out of running server side applications. If you have the Heroku CLI
installed, all you need to do is type `heroku create` in the project directory,
and a heroku app will be created for you automatically. When you make changes
to the snake source code you can push those changes back to heroku.

```
# Create the Heroku App
$ heroku create
$ git push heroku master
```


