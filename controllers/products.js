const products = [{
    _id: 1,
    pName: 'Laptop',
    pDesc: 'Working Purpose',
    pPrice: 960000
},
{
    _id: 2,
    pName: 'Mobile',
    pDesc: 'Calling Purpose',
    pPrice: 10000
},
]
// get products
const getProducts = (req,res)=>{
    res.render('./products.handlebars')
}
//add products
const addproducts = (req,res)=>{              // 1st parameter it takes second half path, first half path is present in index.js
    res.render('./addProduct.handlebars')
}
const addProductPost = (req,res)=>{
    // console.log(req.body);
    // const {_id,pName,pDesc,pPrice} = req.body
    products.push(req.body)
    res.redirect("/products/products")
}
//edit product
const editProducts = (req,res)=>{
    // console.log(req.params._id);
    const index = products.findIndex((products)=>{
        return parseInt(products._id)===parseInt(req.params._id)
    })
    const selectedProduct = products[index]
    res.render('./editProduct.handlebars',{selectedProduct})
}
const editProductPost = (req,res)=>{
    // console.log(req.body);
    const index = products.findIndex((products)=>{
        return parseInt(products._id)===parseInt(req.body._id)
    })
    products.splice(index,1,req.body)
    res.redirect('/products/products')
}
//delete product
const deleteProduct = (req,res)=>{
    // console.log(req.params._id);
    const index = products.findIndex((products)=>{
        return parseInt(products._id)===parseInt(req.params._id)
    })
    products.splice(index,1)
    res.redirect('/products/products')
}


module.exports = {getProducts, addproducts, addProductPost, editProducts, editProductPost, deleteProduct}