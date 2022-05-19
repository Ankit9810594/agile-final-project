const users = require('../models/users')
const mongoose = require('mongoose');

const url ='mongodb://localhost:27017/thriftTesting';
beforeAll(async()=>{
    await mongoose.connect(url,{
        useNewUrlParser:true,
    });
});
afterAll(async()=>{
    await mongoose.connection.close();
});
describe('register testing',()=>{
    //testing for instering student
    it ('Add user testing instering',()=>{
        const customer ={
            name:"Divya Budhathoki",
            email:"divyabudhtoki12@gmail.com",
            password:"divya123",
            cpassword:"divya123",
        };
        return users.create(customer).then((pro_ret)=>{
            expect(pro_ret.name).toEqual("Divya Budhathoki")
        })
    });
});