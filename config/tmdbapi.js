import axios from 'axios';
import './mongoose.js';
import MovieModel from '../models/Movie.js';

const seedMovies = async () => {
    const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=2f0ee4659e75f22b0645bb580847d157&language=es-ES');
    let {
        total_pages,
        results
    } = res.data;
    await MovieModel.insertMany(results);
    for (let i = 2; i <= total_pages; i++){
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=2f0ee4659e75f22b0645bb580847d157&language=es-ES&page=' + i);
        await MovieModel.insertMany(response.data.results);
    }
}
seedMovies()
.catch(console.error);