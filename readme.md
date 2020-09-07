# Ultimate Hack Reactor TA Study Guide #

## Structure ##
* React frontend
* Bootstrap / React Bootstrap for design
* Express server
* MySQL database using Sequelize ORM
* hosted on Heroku

## Features  ##

*MVP:*
* TA topics (to do list)
  * expand topics into sub-topics
  * mark topics as "easy/got it/so-so/don't know"
  * store your to-dos in database
  * form to create topics
  * authentication cookies

*Future:*
* Quiz questions
  * wiki-style, any visitor can create/update
  * CRUD API to store questions
  * multiple choice or short-answer question types
  * add tags by topic
  * practice list of questions by topic
  * generate in random order

## MySQL Schema Design ##

Table: Main Topic
 - id, order, title, text, sub-topic (FK), rating (FK)

Table: Sub-Topic
 - id, order, title, text, rating (FK)

Table: Rating
 - id, rating, user (FK)
  - ratings: null [blank], 0 [don't know], 1 [so-so], 2 [got it], 3 [easy]

Table: User / Session
id, session ID