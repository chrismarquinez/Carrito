    const mongoose = require ("mongoose");


    const connectDB = async () => {
    try {
        const connect = await mongoose.connect(procces.env.MONGO_URL);

        console.log(`MongoDB Conectado: ${connect.connection.host}`)
    } catch (error) {
        console.log(error)
        procces.exit(1)
    }

};

module.exports = connectDB
