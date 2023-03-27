const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const connection = require("./database/db");

app.use(express.json());
app.use(cors());

//Resim dosyalarını okuma için izin ver
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const authRouter = require("./routers/auth.router");
const postsRouter = require("./routers/posts.router");

connection();

app.use("/api", authRouter);
app.use("/api",postsRouter);

app.listen(5000, ()=> console.log("Sunucu 5000 port üzerinden ayağa kaldırıldı!"));
//21:17 görüşürüz