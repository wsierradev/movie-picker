import React from "react"
import axios from "axios"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Image from "react-bootstrap/Image"
import Header from "../components/header"
import "bootstrap/dist/css/bootstrap.min.css"
import 'font-awesome/css/font-awesome.min.css';
import PosterLayout from "../components/PosterLayout"

export default class Movie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: [],
      movieInfo: [],
    }
  }

  componentDidMount() {
    this.getMovie()
  }

  getMovie =  () => {
     axios
      .get(`https://random-movie-picker-kazan.herokuapp.com/randomMovie?category=90sMoviesWeLoved`)
      .then(res => {
        const movie = res.data
        this.setState({ movie: movie })
        const title = this.parseStr(movie.title)
        const year = movie.releaseYear
        return axios.get(`https://www.omdbapi.com/?t=${title}&y=${year}&apikey=95dd8229`)
    })
    .then(res => {
      this.setState({ movieInfo: res.data })
      this.setInfo()
    })
  }

  parseStr = (query) => {
    return query.replace(" ", "+")
  }


  handleClick = () => {
    this.getMovie()
  }

  setInfo = () => {
    let movieInfo = { ...this.state.movieInfo }
    movieInfo.Poster = this.state.movieInfo.Poster || this.state.movie.poster
    movieInfo.Title = this.state.movieInfo.Title || this.state.movie.title
    movieInfo.Director = this.state.movieInfo.Director || "IDK lol"
    movieInfo.Actors = this.state.movieInfo.Actors || "N/A"
    movieInfo.Released = this.state.movieInfo.Released || this.state.movie.releaseYear || "N/A"
    movieInfo.Runtime = this.state.movieInfo.Runtime || "N/A"
    movieInfo.Genre = this.state.movieInfo.Genre ?
      this.state.movieInfo.Genre.split(",").map(genre => (
        <Button key={genre} variant="outline-dark">{genre}</Button>
      )) : [<Button key="123" variant="outline-dark">{"N/A"}</Button>]
    movieInfo.rtRating = movieInfo.Ratings ? movieInfo.Ratings.find(rating => rating.Source === "Rotten Tomatoes").Value || "N/A" : "N/A"
    movieInfo.imdbRating = this.state.movieInfo.imdbRating || "N/A"
    movieInfo.mcRating = this.state.movieInfo.Metascore || "N/A"

    this.setState({ movieInfo: movieInfo })
  }


  render() {
    return (
      <div>
        <Header/>
          <Container className="mt-4">
          <Row>
            <PosterLayout 
              Poster={this.state.movieInfo.Poster}
              Title={this.state.movieInfo.Title}
            />
          
            <Col style={{height: '50vw'}}>
              <h1 className="text-right">{this.state.movieInfo.Title}</h1>
              <h6 className="text-right">Directed by: {this.state.movieInfo.Director}</h6>
              <hr></hr>
              <p className="text-right">Starring: {this.state.movieInfo.Actors}</p>


              <div className="mt-3 pt-5">
                <p className="text-right ">{this.state.movieInfo.Plot}</p>
                <p className="text-right">Release Date: {this.state.movieInfo.Released}</p>
                <p className="text-right ">{this.state.movieInfo.Runtime}</p>
              </div>

              <Row>
                <ButtonGroup align="center" style={{ bottom: "35%"}} className="ml-auto mr-2">{this.state.movieInfo.Genre}</ButtonGroup>
              </Row>
             
              <div style={{position: "absolute", bottom: "30px", width: "95%"}}>
                <Row className="mt-5 ml-2">
                  <Col align="center"><i className="fa fa-3x fa-imdb" aria-hidden="true"></i></Col>
                  <Col  align="center"><img style={{ width: "45px" }} src="data:image/png;base64,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"></img></Col>
                  <Col  align="center"><img style={{ width: "45px" }} src="https://app.truework.com/api/company/20203/logo?fallback=1"></img></Col>
                </Row>
                <Row className="ml-2">
                  <Col align="center"> <b> {this.state.movieInfo.imdbRating}</b></Col>
                  <Col align="center"><b>{this.state.movieInfo.rtRating}</b></Col>
                  <Col align="center"><b>{this.state.movieInfo.mcRating}</b></Col>
                </Row>
                <Row className="mt-4">
                  { this.state.movie.hasBeenWatched ?  
                  <Button className="btn-block" variant="warning">Watched</Button> :   
                  <Button className="btn-block" variant="success">Not Watched</Button>}
                </Row>
                <Row className="mt-1">
                  <Button className="btn-block" variant="info" onClick={this.handleClick}>Want Another Film?</Button>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
