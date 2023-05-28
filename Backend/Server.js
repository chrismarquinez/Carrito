    const dotanv = require("dotenv").config();
    const express = require ("express");
    const { bgCyan } = require("colors");
    const connectDB = require("./config/connectDB");

    connectDB();
     
   
    const app = express();

    //Routes
    app.get("/",(req,res)=>{
    res.send("Corriendo");
    });

    const PORT = process.env.PORT || 5000
    app.listen(PORT, () =>{
    console.log(`Servidor Corriendo En El Puerto ${PORT}`.bgCyan.black);
});



