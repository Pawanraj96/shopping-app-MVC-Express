const express = require('express')
//In router level middleware we have method called Router()
const router = express.Router()
const productController = require('../controllers/products.js')         // importing products and functions from controller

// view products
router.get('/products', productController.getProducts)      // here we are using productController.getProduct bcoz there while exporting we used {} so here we are using like this
// add products
router.get('/add-product', productController.addproducts)
router.post('/add-product', productController.addProductPost)
//edit products
router.get('/edit-product/:_id', productController.editProducts)
router.post('/edit-product', productController.editProductPost)
//delete product
router.get('/delete-product/:_id', productController.deleteProduct)


module.exports = router     