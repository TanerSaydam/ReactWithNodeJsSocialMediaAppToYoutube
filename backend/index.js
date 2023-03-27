const mongoose = require("mongoose");
const express = require("express");
const {v4:uuidv4} = require("uuid");
const app = express();
const multer = require("multer");
const cors = require("cors");
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(cors());

const uri = "mongodb+srv://MongoDb:1@socialmediadb.jubkqs9.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log("MongoDb bağlantısı başarılı!"))
.catch((err)=> console.log("err: " + err.message));

const userSchema = new mongoose.Schema({
    _id: String,
    name: String,
    email: String,
    password: String,
    avatar: Object
});

const User = mongoose.model("User", userSchema);

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "uploads/")
    },
    filename: function(req, file, cb){
        cb(null,Date.now() + "-" + file.originalname)
    }
});

const upload = multer({storage: storage});

const secretKey = "Secret key secret key 12345";
const options = {
    expiresIn: "1h"
}

//Register
app.post("/api/register",upload.single("avatar"), async (req,res)=>{
    try {
        const {name, email, password} = req.body;
        const user = new User({
            _id: uuidv4(),
            name: name,
            email: email,
            password: password,
            avatar: req.file
        });

        const result = await user.save();

        const payload = {
            user: result
        }

        const token = jwt.sign(payload,secretKey,options);

        res.json({token: token, user: result});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

//Login
app.post("/api/login", async (req, res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email: email, password: password});
        if(user == null){
            res.status(403).json({message: "Mail adresi ya da şifre yanlış!"})
        }else{
            const payload = {}
            const token = jwt.sign(payload,secretKey,options);

            res.json({token: token, user:user});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.listen(5000, ()=> console.log("Sunucu 5000 port üzerinden ayağa kaldırıldı!"));
//21:17 görüşürüz