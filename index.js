const express = require('express')
const path = require('path')

const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'))

const products = [
    {
        id : 1,
        title : 'TV'
    },
    {
        id : 2,
        title : 'Cooler'
    },{
        id : 3,
        title :' AC'
    },

]

app.get('/', (req,res)=>{
    res.render('home', {title : 'Home', products : products})
});
app.get('/about', (req,res)=>{
    res.render('about', {title : 'ABout', products : products})
});

const port= 3000;
app.listen(3000, ()=>{
    console.log("server is running");
});