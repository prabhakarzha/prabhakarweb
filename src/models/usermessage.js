const mongoose = require("mongoose");
const validator =require("validator");


const testSchema = mongoose.Schema({
    name : {
        type: String,
        required:true,
        
    },
    
    email: {
          type:String,
          required:true,
         
          validate(value){
              if(!validator.isEmail(value)){
                  throw new Error("Invalid Email")
              }
          }
        
       

    },
    phone:{
        type:Number,
        min:10,
        required:true,
        unique:true
    },
   
    message:{
        type:String,
        required:true

    }


})

//we will create a new collection

 const Test = mongoose.model('Test',testSchema);

 module.exports=Test;