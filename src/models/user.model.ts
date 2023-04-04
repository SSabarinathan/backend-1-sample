import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserDetails = new Schema({
  name: String,
  age: Number,
  role: String,
  place: String,
  status: String,
});

export const userDetails= mongoose.model('userDetails',UserDetails, 'userDetails')

//
