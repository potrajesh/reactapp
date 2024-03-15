import React, { Component,ReactDOM } from 'react';
import Movie from '../Movie/Movie';
import maclaptap from '../images/maclaptap.jpg';
import hplaptap from '../images/hplaptap.jpg';
import lenovo from '../images/lenovo.jpg';
import '../images/style.css';
import Exchangepopup from '../popup/Exchangepopup';
 

let users = [
  {
    name: "MacBook Pro",
    laptapImg: <img className='maclap' src={maclaptap} alt = "maclaptap"></img>
  },
  {
    name: "hp",
    laptapImg: <img className='hplaptap' src={hplaptap} alt = "HP"></img>
  },
  {
    name: "Lenovo",
    laptapImg: <img className='lenovo' src={lenovo} alt = "Lenovo"></img>
  }
];

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      users: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
     
  componentDidMount() {
    this.setState({
      users : users
    });
    this.refs.search.focus();
  }

  handleChange() {
    this.setState({
      searchString: this.refs.search.value
    });
  }

  render() {
    let _users = this.state.users;
    let search = this.state.searchString.trim().toLowerCase();

    if (search.length > 0) {
      _users = _users.filter(function(user) {
        return user.name.toLowerCase().match(search);
      });
    }

    return (
      <div className="active-pink-3 active-pink-4 mb-4">
        <h3>Search for Goods Services</h3>
        <div>
          <input className="form-control"
            type="text" 
            value={this.state.searchString}
            ref="search"
            onChange={this.handleChange}
            placeholder="search"
          />

       <Exchangepopup></Exchangepopup>
          <ul>
            {_users.map(l => {
              return (
                
                <li>
                  {l.name} <a href="#">{l.laptapImg}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default Search;
//ReactDOM.render(<Search />, document.getElementById("app"));