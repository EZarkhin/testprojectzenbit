import React, {Component } from 'react';
import './Movie.css';
import MovieDetails from './MovieDetails';
import axios from 'axios';

class Movie extends Component {

state = {
    showMovieDetails: false
}
details = []
changeShowState = () => {
    let showState = !this.state.showMovieDetails;
    this.setState({showMovieDetails: showState});
    
}
componentDidMount(){
    axios.get(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=4264a7184d557b9b471a96b6f0fa1005&language=en-US`)
    .then(response =>{
        this.details = response.data
        
    })
}
render(){
let detail = null;
if(this.state.showMovieDetails){
    console.log(this.details)
        detail = <MovieDetails runtime={this.details.runtime} release={this.details.release_date
        } image={this.details.poster_path} overview={this.details.overview}/>

}

    return <div className='Movie'>
            <p>Title: {this.props.name}, rating: {this.props.rate}</p>
            <button onClick={this.changeShowState}>Show Details</button>
            {detail}
    </div>
    }
};

export default Movie;