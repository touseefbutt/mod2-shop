require("dotenv").config();
const express = require("express");
const app = express();
const port = 2700;
const mongoose = require("mongoose");
const shopModel = require("./model/shopmodel");
const overRide = require('method-override');



//====== Create DB Connection =======
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser:true,
    useUnifiedTopology: true
})
mongoose.connection.once('open', () =>
    console.log('Database is connected')
);


//middleware is using here
app.use(express.urlencoded({extended:false}));
app.use(express.static("public"));
app.use(express.json());
app.use(overRide('_method'))
app.use((req, res, next) =>{
    console.log("Code working Fine")
    next();
})


//defining .jsx engine
app.set("view engine","jsx");
app.engine('jsx', require('express-react-views').createEngine());

//======== route to access the views =====
//Index page Route   
app.get('/shop', (req, res) => {
    //Query Model to return all Fruits
    shopModel.find({}, (err, allProduct)=> {
        res.render('shop',{
            shop: allProduct
        })
    });
});
//route to register product 
app.post('/shop', (req,res) =>{
    shopModel.create(req.body, (err, productCreated)=>{
        // res.send(productCreated);
    })
    res.redirect('/shop');
})


//route to check product
app.get("/shop/product/:id", (req, res)=>{
    shopModel.findById(req.params.id,(err, productByID)=>{
        res.render('product', {product:productByID})
    });
});


//rendering shop page
app.get("/shop/product", (req,res)=>{
    res.render('product')
})
// app.get("/shop", (req,res)=>{
//     res.render('Shop')
// })
app.get("/shop/register", (req,res)=>{
    res.render('register')
})



// console.log("testing");

//calling the browser port here
app.listen(port, ()=> console.log(`listening the port ${port}`))