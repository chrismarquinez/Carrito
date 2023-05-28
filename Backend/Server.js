    const dotanv = require("dotenv").config();
    const express = require ("express");
    const { bgCyan } = require("colors");
    const Task = require("./model/taskModel");
    const connectDB = require("./config/connectDB");

    const app = express();

    // Middleware
        app.use(express.json())
        app.use(express.urlencoded({extended: false}));
     
    //Routes
    app.get("/",(req,res)=>{
    res.send("Corriendo");
    });

    // Create  a Task
    
    app.post("/api/tasks", async (req,res)=>{

        try {
            const task = await Task.create(req.body);
            res.status(200).json(task);
        } catch (error) {
              res.status(500).json({msg: error.message});
          }
          
    });

    //Get 

        app.get("/api/tasks",async (req,res)=>{


        try {
            const tasks = await Task.find();
            res.status(200).json(tasks);
        
        } catch (error) {
            res.status(500).json({msg: error.message});
    
              }
         });


    const PORT = process.env.PORT || 5000
    
    const startServer = async () => {
    try {
    await connectDB();

    app.listen(PORT, () =>{
        console.log(`Servidor Corriendo En El Puerto ${PORT}`.bgCyan.black);
        });

    } catch (error) {
        console.log(error);
    
    }
};

    startServer();
