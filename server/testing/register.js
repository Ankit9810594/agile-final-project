// // const customer = require('../modules/customer');
// const users = require('../models/users')
// const mongoose = require('mongoose');

//  /// test //
// const url ='mongodb://localhost:27017/thriftTesting';
// beforeAll(async()=>{
//     await mongoose.connect(url,{
//         useNewUrlParser:true,
//     });
// });
// afterAll(async()=>{
//     await mongoose.connection.close();
// });
// describe('register testing',()=>{
//     //testing for instering student
//     it ('Add user testing instering',()=>{
//         const customerC ={
//             name:"Divya Budhathoki",
//             email:"divyabudhtoki12@gmail.com",
//             password:"divya1234",
//             cpassword:"divya1234",
//         };
//         return users.create(customerC).then((pro_ret)=>{
//             expect(pro_ret.name).toEqual("Divya Budhathoki")
//         })
//     });
// });