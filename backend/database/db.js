const mongoose = require("mongoose");

const uri = "mongodb+srv://MongoDb:1@socialmediadb.jubkqs9.mongodb.net/?retryWrites=true&w=majority";

const connection = () =>{
    mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=> console.log("MongoDb bağlantısı başarılı!"))
    .catch((err)=> console.log("err: " + err.message));
}


module.exports = connection;
