import React, { Component } from 'react'
import Movie from './Movies'
import axios from 'axios'
import './Movie.css';

class MovieList extends Component{
    state = {
        movies: []
    }

    componentWillMount(){
        if (localStorage.getItem('SessionID') !== null){
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=4264a7184d557b9b471a96b6f0fa1005&language=en-US&page=1`)
           .then(response =>{
                this.setState({movies: response.data.results})
            })}
        } 



    render(){
       
       let movies = this.state.movies.map((movie, index) => {
           return <Movie key = {movie.id} id={movie.id} name= {movie.title} rate= {movie.vote_average}/>  
       })
     
       return <div>
           <div className='LeftColumn'>{movies.slice(0,movies.length/2)}</div>
           <div className='RightColumn'>{movies.slice(movies.length/2,movies.length)}</div>
        </div>
    }
}

export default MovieList;