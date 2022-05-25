const express = require("express");
const res = require("express/lib/response");
const app = express();
const port = 2700;


//middleware is using here
app.use(express.urlencoded({extended:false}));
app.use(express.static("pic"))
app.use((req, res, next) =>{
    console.log("Code working Fine")
        next();
})


//defining .jsx engine
app.set("view engine","jsx");
app.engine('jsx', require('express-react-views').createEngine());

//======== route to access the views =====
//rendering registration page 
app.get('/register', (req,res) => {
    res.render('register')
})
//rndering shop page
app.get("/shop", (req,res)=>{
    res.render('shop')
})


console.log("testing");

//calling the browser port here
app.listen(port, ()=> console.log(`listening the port ${port}`))