require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookiep = require("cookie-parser");
const app = express();
const PORT = process.env.PORT || 5001;
const mongo = require("mongoose");

mongo.connect(process.env.mongo).then(() => {
    console.log("connected to mongo!!");
});


app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Credentials",true)
    next()
})
app.use(express.json())
app.use(cors({
    origin:"*",
}
))
app.use(cookiep())
// const userRoutes = require("./routes/users.js");
// app.use("/api/users",userRoutes);
const authRoutes = require("./routes/auth.js");
app.use("/api/auth",authRoutes);
// const CommentRoutes = require("./routes/comments.js");
// app.use("/api/comments",CommentRoutes);
// const postRoutes = require("./routes/product.js");
// app.use("/api/product",postRoutes);
// const likeRoutes = require("./routes/likes.js");
// app.use("/api/likes",likeRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT} `)
})