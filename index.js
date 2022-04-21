const express = require('express')
const PORT = 2000
const app = express()
const exphbs = require('express-handlebars')
const productRoute = require('./routes/products.js')        // importing from product.js file

// Set a template engine 
app.engine('handlebars',exphbs())
app.set('view engine','handlebars')

// Body parse Built in middleware in order to add product and edit ad all
app.use(express.urlencoded({extended:true}))

// Apply router level middleware
app.use('/products',productRoute)       // It takes two parameter 1st is half path and 2nd is route path.


app.get('/',(req,res)=>{
    res.render('./landingPage.handlebars')
})

app.listen(PORT,()=>{
    console.log('Server Listening at 2000');
})