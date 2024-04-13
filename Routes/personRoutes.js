const express= require('express');
const router= express.Router();
const person= require('./../models/person')


router.post('/',async (req,res)=>{

    try{
    const data= req.body;////////////assuming req body contains the person data
    ////create new person document using mongoose model
    const newPerson= new person(data);
  
    const response = await newPerson.save();
  
    console.log('data saved successfully');
    res.status(200).json(response);
  
    }
    catch(err){
      console.log('error saving data',err);
      res.status(500).json({error:'internal server error'});
    }
    // newPerson.name= data.name;
    // newPerson.work= data.work;
    // newPerson.mobile= data.mobile;////////////rather than writing this...pass data while declaring the newPerson  i.e. new person(data)
   
    ///save person data in the database/////////////save function donot accepts callback
    // newPerson.save((error,person)=>{
    //   if(error){
    //   console.log('error saving data',error);
    //   res.status(500).json({error:'internal server error'});
    //   }
    //   else{
    //     console.log('data saved successfully');
    //     res.status(200).json(person);
    //   }
    // })
  
  })
  
  router.get('/',async (req,res)=>{
    try{
      const data= await person.find(); 
      console.log('data fetched successfully');
      res.status(500).json(data);
    }catch(err){
      console.log('error fetching data',err);
      res.status(500).json({error:'internal server error'});
    }
  })
  

  router.get('/:workType',async (req,res)=>{
    try{
        const workType= req.params.workType;
        if(workType=='chef'||workType=='waiter'||workType=='manager'){
          const response= await person.find({work:workType});
          console.log('response fetched')
          res.status(200).json(response)
        }else{
          res.status(404).json({error:'invalid work type'})
        }
    }catch{
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }
  
  })

  router.put('/:id',async(req,res)=>{
    try{
      const personId= req.params.id;
      const updatedPersonData=req.body;

      const response = await person.findByIdAndUpdate(personId,updatedPersonData,{
        new:true,
        runValidators:true
      }) 
      if(!response){
        console.log('error updating data')
        return res.status(404).json({error:'person not found'})
      }
      console.log('data updated')
       res.status(200).json(response)
    }catch(error){
       console.log(error)
       res.status(500).json({error:'internal server error'})
    }
  })
  

  router.delete('/:id',async(req,res)=>{
    try{
      const personId= req.params.id;

      const response = await person.findByIdAndDelete(personId) 
      if(!response){
  
        return res.status(404).json({error:'person not found'})
      }
      console.log('data deleted')
      res.status(200).json({message:'successfully deleted'})
    }catch(error){
       console.log(error)
       res.status(500).json({error:'internal server error'})
    }
  })

//github
  module.exports= router;