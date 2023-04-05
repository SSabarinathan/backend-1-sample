import mongoose from 'mongoose';

const Schema = mongoose.Schema;
//schema creation 
const UserDetails = new Schema({
  name: String,
  age: Number,
  role: String,
  place: String,
  status: String,
});
//model creation
export const userDetails= mongoose.model('userDetails',UserDetails, 'userDetails')

//
