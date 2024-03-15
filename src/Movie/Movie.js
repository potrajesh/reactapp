import React, { Component } from 'react';
import './style.css';


class Movie extends React.Component {

    render() {

        return <div className='moviecard'>
            <img src={this.props.banner}></img>
            <label>
                {this.props.name}{this.props.at}
            </label>
        </div>

    }
}
export default Movie;