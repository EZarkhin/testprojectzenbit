import React, { Component } from 'react';
import './App.css';
import MovieList from '../components/Movies/MovieList'
import axios from 'axios'


class App extends Component {
 
  componentDidMount(){
    if (localStorage.getItem('SessionID') === null){
    axios.get('https://api.themoviedb.org/3/authentication/guest_session/new?api_key=4264a7184d557b9b471a96b6f0fa1005')
        .then(response =>{
            localStorage.setItem('SessionID', response.data.guest_session_id)
        })}
} 

  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Movie Searcher</h1>
        </header>
          <MovieList />
      </div>
    );
  }
}

export default App;
