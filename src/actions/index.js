import axios from 'axios';

const recieveMovies = movies =>({
    type: 'RECIEVE_MOVIES',
    payload: movies
})

export const fetchMovies = () => dispatch =>
axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=4264a7184d557b9b471a96b6f0fa1005&language=en-US&page=1`)
    .then(response => dispatch(recieveMovies(response.data.results)))

export const changeFilter = filter =>({
    type: 'CHANGE_FILTER',
    payload: filter
})