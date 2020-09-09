# Ultimate Hack Reactor TA Study Guide

## Structure

- React frontend
- Bootstrap / React Bootstrap for design
- Express server
- MySQL database using Sequelize ORM
- hosted on Heroku

## Features

_MVP:_

- TA topics (to do list)
  - expand topics into sub-topics
  - mark topics as "easy/got it/so-so/don't know"
  - store your to-dos in database
  - form to create topics
  - authentication cookies

_Future:_

- Quiz questions
  - wiki-style, any visitor can create/update
  - CRUD API to store questions
  - multiple choice or short-answer question types
  - add tags by topic
  - practice list of questions by topic
  - generate in random order

## MySQL Schema Design

Table: Main Topic

- id, order, title, text, sub-topic (FK), rating (FK)

Table: Sub-Topic

- id, order, title, text, rating (FK)

Table: Rating

- id, rating, user (FK)
- ratings: null [blank], 0 [don't know], 1 [so-so], 2 [got it], 3 [easy]

Table: User / Session
id, session ID

## Checklist

- [x] Create React / Webpack skeleton
- [x] Create Express skeleton with routes to send study data
- [x] Create fake Main Topic study data (JSON)
- [x] Render fake study data in React
- [x] Set up MySQL database using Sequelize
- [x] Create schema for Topic table
- [x] Set up Express route to post data and insert into Topic table
- [x] Replace fake study data with data from the Database
- [ ] ~~Add schemas and tables for Sub-Topic, Rating, User~~
  - EDIT: Replaced relational schema with independent sessions table that stores ratings, refactor later with Sequelize assocations
- [x] Add Express routes for CRUD to these tables
- [x] Create a form for CRUD API, users can create/edit/delete info from the tables
- [x] Make ratings work, store in database (only one global user for now)
- [ ] Add formatting to card text (i.e. new lines, markdown syntax?)
- [ ] Add ability to add/store/display multiple links to a card
- [ ] Add buttons to resort topics based on difficulty (click to cycle through: default order, easiest to hardest, hardest to easiest)
- [ ] Add ability to change topic default order permanently (drag and drop???)
- [ ] Add ability for "main" topics to have sub-topic lists. ~~Each sub-topic is also its own card with ratings.~~ A list has no text or links, just a rating radio menu.
- [ ] Add images to cards???
