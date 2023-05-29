    const dotanv = require("dotenv").config();
    const express = require ("express");
    const { bgCyan } = require("colors");
    const Task = require("./models/taskModel");
    const connectDB = require("./config/connectDB");
    const taskRoutes = require ("./routes/taskRoute")

    const app = express();

    // Middleware
        app.use(express.json());
        app.use(express.urlencoded({extended: false}));
        app.use(taskRoutes);
     
    //Routes
        app.get("/",(req,res)=>{
        res.send("Corriendo");
        });


    const PORT = process.env.PORT || 5000
    
    const startServer = async () => {
        try {
            await connectDB();

            app.listen(PORT, () =>{
            console.log(`Servidor Corriendo En El Puerto ${PORT}`.bgCyan.black);
        });

    }   catch (error) {
        console.log(error);
    }
};

startServer();
