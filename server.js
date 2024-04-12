// var fs= require('fs')
// var os= require('os')
// var user = os.userInfo();
// console.log(user)
const express = require('express')
const app = express()
const db= require('./db');
const person= require('./models/person')
const menuItem= require('./models/menuItem')

const bodyParser= require('body-parser')
app.use(bodyParser.json());//req body


const personRoutes = require('./Routes/personRoutes');
app.use('/person', personRoutes) 


const menuRoutes = require('./Routes/menuRoutes');
app.use('/menu', menuRoutes) 



////post route to add data
// app.post('/person',async (req,res)=>{
//   try{
//   const data= req.body;////////////assuming req body contains the person data
//   ////create new person document using mongoose model
//   const newPerson= new person(data);

//   const response = await newPerson.save();

//   console.log('data saved successfully');
//   res.status(200).json(response);

//   }
//   catch(err){
//     console.log('error saving data',err);
//     res.status(500).json({error:'internal server error'});
//   }
//   // newPerson.name= data.name;
//   // newPerson.work= data.work;
//   // newPerson.mobile= data.mobile;////////////rather than writing this...pass data while declaring the newPerson  i.e. new person(data)
 
//   ///save person data in the database/////////////save function donot accepts callback
//   // newPerson.save((error,person)=>{
//   //   if(error){
//   //   console.log('error saving data',error);
//   //   res.status(500).json({error:'internal server error'});
//   //   }
//   //   else{
//   //     console.log('data saved successfully');
//   //     res.status(200).json(person);
//   //   }
//   // })

// })

// app.get('/person',async (req,res)=>{
//   try{
//     const data= await person.find(); 
//     console.log('data fetched successfully');
//     res.status(500).json(data);
//   }catch(err){
//     console.log('error fetching data',err);
//     res.status(500).json({error:'internal server error'});
//   }
// })



// app.post('/menu',async (req,res)=>{
//   try{
//   const data= req.body;
//   const newItem= new menuItem(data);

//   const response = await menuItem.save();

//   console.log('data saved successfully');
//   res.status(200).json(response);

//   }
//   catch(err){
//     console.log('error saving data',err);
//     res.status(500).json({error:'internal server error'});
//   }

// })

// app.get('/menu',async (req,res)=>{
//   try{
//     const data= await menuItem.find(); 
//     console.log('data fetched successfully');
//     res.status(200).json(data);
//   }catch(err){
//     console.log('error fetching data',err);
//     res.status(500).json({error:'internal server error'});
//   }
// })


// app.get('/person/:workType',async (req,res)=>{
//   try{
//       const workType= req.params.workType;
//       if(workType=='chef'||workType=='waiter'||workType=='manager'){
//         const response= await person.find({work:workType});
//         console.log('response fetched')
//         res.status(200).json(response)
//       }else{
//         res.status(404).json({error:'invalid work type'})
//       }
//   }catch{
//       console.log(err);
//       res.status(500).json({error:'internal server error'});
//   }

// })




app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3001)