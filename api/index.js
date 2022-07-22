const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const authRoute=require('./routes/auth')
const userRoute=require('./routes/users')
const movieRoute=require('./routes/movies')

dotenv.config()


mongoose.connect(process.env.MONGODB_URL).then(()=>console.log('connected to db'))
.catch((err)=>console.log(err))

app.use(express.json())
app.use('/api/auth',authRoute)
app.use('/api/users',userRoute)
app.use('/api/movies',movieRoute)

app.listen(8000,()=>{
    console.log('Server is running!')
})