// const mongoose = require('mongoose');
// const product = require("../models/products.js");
// const url='mongodb://localhost:27017/thriftTesting'
// beforeAll(async()=>{
//     await mongoose.connect(url, {     
//     })
// });
// afterAll(async()=>{
//     await mongoose.connection.close();
// })

// //testing product
// describe(' Add product testing ', ()=>{
//     it('Add product testing ', ()=>{
//         const productTest={
//             pName: "Shirt",
//             pDescription: "Best Shirt",
//             pPrice:"200",
//             pStatus:"Active",
//             pImage: "image.jpg" 
                 
//         }
//         return product.create(productTest).then((pro_ret)=>{
//             expect(pro_ret.pName).toEqual("Shirt")
//         })
//     })
// })