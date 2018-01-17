import React, { Component } from 'react'
import Movie from './Movies'
//import axios from 'axios'
import './Movie.css';
import {connect} from 'react-redux'
import {fetchMovies, changeFilter} from '../../actions/index'

class MovieList extends Component{
    moviesToRender = []
   
    componentDidMount(){
     this.props.fetchMovies();
    }
    
    nameFilter = (event) => {
       
        this.moviesToRender = this.props.movies.map((movie, index) => {
            let title = movie.title.toLowerCase();
            if(event.target.value === ''){
            return movie  
         }
             else if (title.indexOf(event.target.value.toLowerCase())===0){
                 return movie
             }
             else return null
        })
        this.props.onChangeFilter(event.target.value)
        
    }

render(){
        let movies = null;
      if(this.props.filter===''){
        movies = this.props.movies.map((movie, index) => {
            return <Movie key = {movie.id} id={movie.id} name= {movie.title} rate= {movie.vote_average}/>  
       })}
       else {
       movies = this.moviesToRender.map((movie, index) => {
          if(movie!==null)
           return <Movie key = {movie.id} id={movie.id} name= {movie.title} rate= {movie.vote_average}/>  
           else return undefined
       })}
       console.log(this.props.movies)
       return <div>
           <p>Fiter by title <input margin='5 5 5 5'type='text' onChange={this.nameFilter}  /></p>
           <div className='LeftColumn'>{movies.slice(0,movies.length/2)}</div>
           <div className='RightColumn'>{movies.slice(movies.length/2,movies.length)}</div>
        </div>
    }
}

const mapStateToProps = store =>({
    movies: store.movies? store.movies : [],
    filter: store.filter
})
const mapDispatchToProps = dispatch => ({
    fetchMovies: () => dispatch(fetchMovies()),
    onChangeFilter: filter => dispatch(changeFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);