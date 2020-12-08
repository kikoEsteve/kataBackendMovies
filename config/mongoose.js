import mongoose from 'mongoose';
//Ruta a MongoDB Atlas cambiando la contraseña "cM2x.."y nombre de la base de datos "BackMovies"
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://dbKikoEsteve:cM2xD4XtRVWLKe5K@cluster0.0ocry.mongodb.net/BackMovies?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(() => console.log('Successfully connected to MongoDB'))
.catch(console.error)