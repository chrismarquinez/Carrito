    const dotenv = require("dotenv").config();
    const express = require ("express")
    const { bgCyan } = require("colors");
    const connectDB = require("./config/")

    const app = express()

    //Routes
    app.get("/",(req,res)=>{
    res.send("Corriendo");
    });

   connectDB();

    const PORT = process.env.PORT || 5000
    app.listen(PORT, () =>{
    console.log(`Servidor Corriendo En El Puerto ${PORT}`.bgCyan.red);
});


//mongodb+srv://chrism:<password>@atlascluster.ul8ffm9.mongodb.net/
