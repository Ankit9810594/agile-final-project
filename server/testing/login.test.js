const mongoose = require('mongoose');
const users = require("../models/users.js");
const url='mongodb://localhost:27017/thriftTesting';

beforeAll(async()=>{
    await mongoose.connect(url, {
        
    })
});
afterAll(async()=>{
    await mongoose.connection.close();
})

//login testing
describe("singuptesting", () => {
    it("can sign up as new user", async () => {
      // we will write this function next
      email="divyabudhtoki12@gmail.com",
      password= "divya1234"
    })
  });