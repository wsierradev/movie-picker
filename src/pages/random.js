import React from 'react';
import Header from "../components/header"

import axios from 'axios';

export default class Movie extends React.Component {
  state = {
    movie: []
  }

  componentDidMount() {
    axios.get(`https://random-movie-picker-kazan.herokuapp.com/randommovie`, {
        headers: { 
           'Access-Control-Allow-Origin': 'http://localhost:8000/',
           'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
                    },
       }).then(res => {
        const movie = res.data;
        console.log(movie)

        this.setState({ movie });
      })
  }

  render() {
    return (
      <ul>
      <Header headerText="Movie Stuff"  />
        {/* stuff goes here */}
      </ul>
    )
  }
}
