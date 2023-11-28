'use strict'
var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 8080;

mongoose.connect('mongodb+srv://formaciones:uYAQNuTvLhhJsL2W@cluster0.z8q15cp.mongodb.net/?retryWrites=true&w=majority',  (err,res) => {

  
  if(err){
      throw err;
  } else{
      console.log("La conexion a base esta corriendo correctamente");
      app.listen(port,function(){
          console.log("servidor del api rest online en el puerto :" ,port);
      });
  } 
    
});
