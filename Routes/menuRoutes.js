const express= require('express');
const router= express.Router();
const menuItem= require('./../models/menuItem');


router.post('/',async (req,res)=>{
    try{
    const data= req.body;
    const newItem= new menuItem(data);
  
    const response = await menuItem.save();
  
    console.log('data saved successfully');
    res.status(200).json(response);
  
    }
    catch(err){
      console.log('error saving data',err);
      res.status(500).json({error:'internal server error'});
    }
  
  })
  
  router.get('/',async (req,res)=>{
    try{
      const data= await menuItem.find(); 
      console.log('data fetched successfully');
      res.status(200).json(data);
    }catch(err){
      console.log('error fetching data',err);
      res.status(500).json({error:'internal server error'});
    }
  })
  
  module.exports = router;