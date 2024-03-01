const express=require("express");
const dotenv=require("dotenv");
const routes=require("./routes/authRoutes");

const app=express();
dotenv.config();
const PORT=process.env.PORT;


app.use(express.json());

app.use(routes);

app.listen(PORT,()=>{
    console.log(`Server is running on port : ${PORT}`);
})