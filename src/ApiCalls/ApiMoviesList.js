import React from 'react';
import axios from 'axios';
class ApiMoviesList extends React.Component{
  state={
    persons:[]
  }
    moviesList= ()=>{
          axios.get("https://jsonplaceholder.typicode.com/users").then(res=>{
            const persons = res.data;
              this.setState({persons})
          },
          (error) =>{
            console.log(error)
          }
          )
    }

render(){
return<div>
    <button onClick={this.moviesList}>getMoviesList</button>
    <ul>
     {this.state.persons.map(persons=><li>{persons.username}</li>)}
    </ul>
</div>
}

}
export default ApiMoviesList;