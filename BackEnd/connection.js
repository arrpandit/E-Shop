

const mongoose = require('mongoose')
// const url = "mongodb://127.0.0.1:27017/products"
// const uri = "mongodb+srv://root:<root>@cluster0.q290lhg.mongodb.net/?retryWrites=true&w=majority";

//mongoose

async function mongooseConn(url){
    return await mongoose.connect(url)
}


module.exports = {mongooseConn}


