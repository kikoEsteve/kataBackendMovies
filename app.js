import express from 'express';
import morgan from 'morgan';
import './config/mongoose.js';
import cors from './middleware/cors.js';

import moviesRouter from './routes/movies.js';
import usersRouter from './routes/users.js';
import ordersRouter from './routes/orders.js';

// const API_KEY = '2f0ee4659e75f22b0645bb580847d157' 
const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(cors);

//Parseo
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//rutas
app.use('/users', usersRouter);
app.use('/movies', moviesRouter);
app.use('/orders', ordersRouter);


app.listen(PORT, () => console.log('server is running at port ' + PORT));