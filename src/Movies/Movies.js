import React from 'react';
import Movie from '../Movie/Movie';
import '../Movies/style.css';
import moviesList from './moviesList';
class Movies extends React.Component {
    
  state = {...moviesList};

  getMovie = movie => {
    return <Movie at={movie.at} banner={movie.banner} ></Movie>
  }
  render() {
    return <div className='movies-section'>
      {
        Object.keys(this.state).map(keys=>{
          return this.getMovie(this.state[keys])
        })
      }
    </div>
  }
}
export default Movies;