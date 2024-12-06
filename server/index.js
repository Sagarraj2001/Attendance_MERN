const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const cookieParser=require('cookie-parser')
const authRoutes=require("./routes/authRoute")
const attendanceRouter=require('./routes/attendanceRoute')
const showRouter=require('./routes/ShowRoutes')
const dotenv=require("dotenv")
const path=require("path")


dotenv.config({path:path.join(__dirname,"./config/config.env")})


const app=express();
app.use(express.json())
app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST","PUT"],
    credentials:true
}))
app.use(cookieParser())


mongoose.connect("mongodb://127.0.0.1:27017/college"
)
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.log('MongoDB connection error:', error));


// api testing

//signup + login
app.use("/api",authRoutes);

//attendance page
app.use("/attendanceApi",attendanceRouter)

//show page
app.use("/showapi",showRouter)

const port= process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`app is listening on ${port}`);
})
