 const moongose = require('mongoose')

 const dbConnect = () => {
  const DB_URI = process.env.DB_URI;
  moongose.connect(DB_URI, { 
    
  }, (err, res) => {
    if(!err) console.log('Conexion correcta') && console.log('conexion incorrecta')
  
  } )
 }
 
 module.exports = dbConnect
 
 
 


