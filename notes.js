//  [Steps for backend express ]

//1. Install node environment
//  npm init -y

// -----------------------------------------------------

// 2. install Express ,nodemon ..here we get package.json and node modules
// 2. npm install express nodemon


// -----------------------------------------------------
// 3.. Add start script in package.json after test
//  "start": "nodemon server.js"

// -----------------------------------------------------
// 4.. Create server.js and Establish server =>  require express --> app()---> listen()

// const express = require('express')
// const app = express()
// const PORT=3000;
// app.listen(PORT, ()=>{
//     console.log('Server is now running..${PORT}');
  // })


// -----------------------------------------------------
// SETUP MVC ARCHITECTURE --> CREATE MODELS,VIEWS ,CONTROLLER,ROUTES folders

// [Models]
// in models  create files eg: veggies.js, fruit.js and export it, and import in server.js using require

// const fruitData = require('./models/fruit')

//create code in fruits.js under model folder and export it =>  module.exports = fruits;

// -----------------------------------------------------
//  [ROUTE]
// create route per model


// -----------------------------------------------------
// [VIEWS]

// INSTALL EJS
// npm install express ejs --save

// create HomePage.ejs under views folder and create html code

// in server.js
// app.set('view engine', 'ejs')

//  app.get('/home',(req,res)=>{
//     res.render('HomePage')
// })

// http://localhost:3000/home  will open HomePage
