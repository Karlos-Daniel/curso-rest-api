const{response,request}= require('express');

const usuariosGet = (req = request, res = response)=>{
   res.json({
    msg:'get API'
   })
}
const usuariosPost = (req = request, res = response)=>{
    const {nombre, edad} = req.body
    
    
    res.json({
     msg:'POST API',
     name: nombre,
     age: edad
    })
 }

module.exports = {
    usuariosGet,
    usuariosPost
}