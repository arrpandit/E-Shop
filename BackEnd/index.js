const express = require('express');
const cors = require('cors')
const productApirouter = require('./routes/products')
const sellerApiRouter = require("./routes/seller")
const {mongooseConn} = require('./connection')
const {logs} = require('./middleware/product')

const app = express();
app.use(cors());


//middleware
app.use(logs("logs.txt"))
app.use(express.json({ extended: false }))

//mongo
mongooseConn("mongodb://127.0.0.1:27017/products")
.then(()=>console.log("Mongo Connected"))
.catch(()=>console.log("Error in mongoDB conn"))

//route
app.use('/products',productApirouter)
app.use("/seller",sellerApiRouter)


//server listen
app.listen(5000, () => {
    console.log(`server running at port ${5000}`)
})