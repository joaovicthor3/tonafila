const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema and a Model
const UserSchema = new Schema({
    name: String,
    password: String,
    email: String
});

const ProductSchema = new Schema({
  name: String,
  type: String,
  amount: Number,
  price: Number,
  userlist: [UserSchema]
});

const CompanySchema = new Schema({
    name: String,
    password: String,
    email: String,
    products: [ProductSchema]
});


const Company = mongoose.model('companies', CompanySchema);

module.exports = Company;
