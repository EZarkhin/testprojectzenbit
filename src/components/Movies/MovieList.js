import React, { Component } from 'react'
import Movie from './Movies'
import axios from 'axios'
import './Movie.css';

class MovieList extends Component{
    state = {
        movies: [],
        filter: ''
    }
    moviesToRender = []
    componentWillMount(){
        if (localStorage.getItem('SessionID') !== null){
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=4264a7184d557b9b471a96b6f0fa1005&language=en-US&page=1`)
           .then(response =>{
                this.setState({movies: response.data.results})
            })}
        } 
    
    nameFilter = (event) => {
       
        this.moviesToRender = this.state.movies.map((movie, index) => {
            let title = movie.title.toLowerCase();
            if(event.target.value === ''){
            return movie  
         }
             else if (title.indexOf(event.target.value.toLowerCase())===0){
                 return movie
             }
             else return null
        })
        this.setState({filter: event.target.value})
        
    }


    render(){
       
       let movies = this.moviesToRender.map((movie, index) => {
          if(movie!==null)
           return <Movie key = {movie.id} id={movie.id} name= {movie.title} rate= {movie.vote_average}/>  
       })
       console.log(movies)
       return <div>
           <p>Fiter by title <input margin='5 5 5 5'type='text' onChange={this.nameFilter} value={this.state.filter} /></p>
           <div className='LeftColumn'>{movies.slice(0,movies.length/2)}</div>
           <div className='RightColumn'>{movies.slice(movies.length/2,movies.length)}</div>
        </div>
    }
}

export default MovieList;