const express = require('express');
require('dotenv').config();
const cors = require('cors');
const routesUsuario = require('../routes/userRoutes')
class server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        
        //Middlewares
        this.middlewares();
                
        //Rutas de mi aplicacion
        this.routes();
    }

    middlewares(){
        this.app.use(express.static('public'))
        this.app.use(cors());//cors
        this.app.use(express.json());
    }

    routes(){
        
        this.app.use(routesUsuario);
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`SERVIDOR CORRIENDO EN http://localhost:${this.port}/`);
        });
    }

}

module.exports=server;