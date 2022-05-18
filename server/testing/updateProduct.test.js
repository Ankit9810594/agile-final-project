const mongoose = require('mongoose');
const product = require("../models/products.js");
const url='mongodb://localhost:27017/thriftTesting';

beforeAll(async()=>{
    await mongoose.connect(url, {
         
    })
});
afterAll(async()=>{
    await mongoose.connection.close();
})

// product update
it('to test update', async()=>{
    return product.findOneAndUpdate({_id: Object('62e4db9955b7c40d9cbba20b')},
    {$set: {pName: "TShirt"}})
    .then((pn)=>{
        expect(pn.pName).toEqual('Tshirt')
    });
    
});