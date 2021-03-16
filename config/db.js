const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect("mongodb+srv://ronak_123:Bhawesh@123@cluster0.uqkv7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log(
    `Mongo database connected on ${conn.connection.host}`.cyan.underline.bold
  );
};


module.exports = connectDB;
