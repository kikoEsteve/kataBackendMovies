import mysql from 'mysql2/promise.js';
import './config/mongoose.js';
import MovieModel from './models/Movie.js';

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'BackMovies'
});
const [movies, fields] = await connection.execute('SELECT * FROM movies');
await MovieModel.insertMany(movies);
console.log('Data Base Seeded');