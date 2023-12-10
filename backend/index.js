import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}
import express from "express"
import mongoose from "mongoose"
const app = express();
import booksRoute from "./routes/booksRoute.js"
import cors from "cors"
const MongoDBUrl = process.env.MONGODB_URL;
app.use(express.json())
mongoose.connect(MongoDBUrl)
    .then(() => {
        console.log("Database connected successfully")
        app.listen(3000, () => {
            console.log(`Listening on Port 3000`)
        })
    })
    .catch(e => {
        console.log(e)
    })
app.use(cors())
app.use("/bookStore", booksRoute)


app.use((err, req, res, next) => {
    const { message = "Something Went Wrong", status = 404 } = err;
    res.status(status).send(message)
})


