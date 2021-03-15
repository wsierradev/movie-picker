import React from "react"
import axios from "axios"
import {
  Header,
} from '../components';
import "bootstrap/dist/css/bootstrap.min.css"
import 'font-awesome/css/font-awesome.min.css';



export default class AddMovie extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        category: "90sMoviesWeLoved",
        hasBeenWatched: false,
        poster: "https://random-movie-picker.s3.amazonaws.com/corky_romano/poster.jpg",
        releaseYear: "1999",
        title: "Pokemon the Movie"
      }
    }

    handleClick = () => {
        this.postMovieList()
    }

    postMovie =  () => {
        axios
       .post(`https://random-movie-picker-kazan.herokuapp.com/movie`, {
        "category": "90sMoviesWeLoved",
        "hasBeenWatched": false,
        "poster": "https://random-movie-picker.s3.amazonaws.com/corky_romano/poster.jpg",
        "releaseYear": "1996",
        "title": "Testy123"
      })
     }
    

    
  render() {
    return (
        <div>
        <Header />
        <div className="container">
    <div className="row align-items-center">
    <div className="col-md-12">
        <h1>Add a movie</h1>
            <form className="col-lg-6 offset-lg-3">
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={this.state.category}></input>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="watched">Has been watched?</label>
          <input type="password" className="form-control"  placeholder={this.state.hasBeenWatched.toString()}></input>
        </div>
        <div className="form-group">
          <label htmlFor="poster">Poster Image</label>
          <input type="password" className="form-control" placeholder={this.state.poster}></input>
        </div>
        <div className="form-group">
          <label htmlFor="year">Release Year</label>
          <input type="password" className="form-control"  placeholder={this.state.releaseYear}></input>
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="password" className="form-control" placeholder={this.state.title}></input>
        </div>

        <button className="btn btn-primary" onClick={this.postMovie()}>Submit</button>
      </form>
      </div>
      </div>
      </div>
      </div>
    )
  }
}
