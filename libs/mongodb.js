/* eslint-disable no-undef */


import mongoose from 'mongoose';

async function connectMongoDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
    } 

    catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }

}


export default connectMongoDB;
