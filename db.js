const mongoose= require('mongoose');

const mongoURL= 'mongodb://127.0.0.1:27017/hotels'
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db= mongoose.connection;


////////////event listeners///////////////
db.on('connected',()=>{
    console.log("connected to mongodb")
});
db.on('error',(err)=>{
    console.log('mongodb connection error:',err)
});
db.on('disconnected',()=>{
    console.log("disconnected")
});

module.exports=db;