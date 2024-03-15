import React, { Component } from 'react';
import PropTypes, { any } from 'prop-types'
import Movie from './Movie/Movie'
import Movies from './Movies/Movies';
import Calculator from './calculator/Calculator.js';
import {BrowserRouter as Router,Switch,Route,Link}from 'react-router-dom';
import CustomParent from './parent/CustomParent';
import CustomChild from './child/CutomChild';
import SubChild from './child/SubChild';
import ApiMoviesList from './ApiCalls/ApiMoviesList';
import Header from './header/Header';
import Search from './search/Search';
import SearchReference from './references/SearchReference';
function App(){
  return (
        
    <Router>
      <div>
        <nav>
          <ul>
            {/* <li>
              <Link to="/movies">Movies List</Link>
            </li>
            <li>
              <Link to="/calc">Calculator</Link>
            </li>
            <li>
              <Link to="/parent">click on Parent</Link>
            </li>
            <li>
              <Link to="/child">click on child</Link>
            </li>
            <li>
              <Link to="/subchild">click on subchild</Link>
            </li>
            <li>
              <Link to="/getallmovies">getallMoviesListfromApi</Link>
            </li>
            <li>
              <Link to="/header">header</Link>
            </li>
             
             <li>
              <Link to="/search">search</Link>
            </li>
            */}
          </ul>
        </nav>
        <Switch>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/calc">
            <Calculator />
          </Route>
          <Route path="/parent"><CustomParent></CustomParent></Route> 
          <Route path="/child"><CustomChild></CustomChild></Route>
          <Route path="/subchild"><SubChild></SubChild></Route>
          <Route path="/getallmovies"><ApiMoviesList></ApiMoviesList></Route>
          <Route path="/header"><Header></Header></Route>
          <Route path="/search"><Search></Search></Route>
          <Route path="/"><SearchReference></SearchReference></Route>

          
        </Switch>
      </div>
    </Router> 
  );
}
export default App;