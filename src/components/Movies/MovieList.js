import React, { Component } from 'react'
import Movie from './Movies'
import axios from 'axios'

class MovieList extends Component{
con
        state = {
            movies: []
        }
      componentWillMount(){
            if (localStorage.getItem('SessionID') !== null){
            axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=4264a7184d557b9b471a96b6f0fa1005&language=en-US&page=1`)
                .then(response =>{
                    this.setState({movies: response.data.results})
                    console.log(this.state.movies)
                })}
        } 
    render(){
       
       let movies = this.state.movies.map((movie, index) => {
           return <Movie key = {movie.id} name= {movie.title} />  
       })

       return <div>
         {movies}
        </div>
    }
}

export default MovieList;