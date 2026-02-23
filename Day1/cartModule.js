let addtocart = ()=>{
    console.log("add to cart");
}

module.exports = addtocart; // default export in commonjs, we can only export one thing as default, if we want to export multiple things we can use named export, but in commonjs we don't have named export, we can only use module.exports to export multiple things, but we have to use an object to export multiple things, and we have to use the same name to import it in the other file.

let removefromcart = ()=>{
    console.log("remove from cart");
}

module.exports = {
    addtocart,
    removefromcart
}  // named export in commonjs, we can export multiple things as named export, but we have to use the same name to import it in the other file.

let name = "John Doe";

module.exports = {
    addtocart,
    removefromcart,
    name
}  // we can export multiple things as named export, but we have to use the same name to import it in the other file.