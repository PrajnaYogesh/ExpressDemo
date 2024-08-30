const express = require('express')
const app = express()
const PORT=3000;
const fruitData = require('./models/fruit')
const vegData = require('./models/veggies')

// VIEWS
app.set('view engine', 'ejs')

//npm install express ejs --save


// ----ROUTES
app.get('/',(req,res)=>{
    res.send('Welcome Home')
    })


    app.get('/home',(req,res)=>{
        res.render('HomePage')
        })
    

app.get('/fruits',(req,res)=>{
res.json(fruitData)
})


app.get('/veggies',(req,res)=>{
    res.send('Hi I am the veggies')
    })
    



//     app.get('/veggies',(req,res)=>{
//         res.send('Hi I am the veggies')
//         })

// function getVeggies()
// {
//     const list = document.createElement ('ul');

//     for(let veg of vegData){
//       const liData =  document.createElement('li')
//        liData.textContent(veg)
//        list.appendChild(liData) 
//     }
// const body = document.getElementsByTagName('body')
// body.appendChild(list)
// }

// app.get('/vegInfo',(req,res)=>{
//     res.render(getVeggies)
// })

app.listen(PORT, ()=>{
    console.log('Server is now running..${PORT}');
    
})