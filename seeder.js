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

// Suppose we want to insert some data into a few tables by default. 
// To manage all data migrations you can use seeders. 
// Seed files are some change in data that can be used to populate database table with sample data or test data.