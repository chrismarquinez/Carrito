const mongoose = require ("mongoose");

const taskSchema = mongoose.Schema(
   { 
    Nombre: {
        type: String,
        required:[true,"Agregar Task"]
    },
    Completado:{
        type: Boolean,
        required: true,
        default: false
    },
},

   {
    timestamps:true
   }

);

const Task = mongoose.model("Task",taskSchema)
module.exports = Task;