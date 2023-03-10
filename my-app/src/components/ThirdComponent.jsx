import { Component } from "react";
import { Row, Col } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

// 447ab8e0
// http://www.omdbapi.com/?i=tt3896198&apikey=447ab8e0
// harry%20potter

class ThirdComponent extends Component {
  state = {
    url: "http://www.omdbapi.com/?apikey=447ab8e0&s=",
    movies: [],
  };

  fetchMovies = async () => {
    try {
      let response = await fetch(`${process.env.REACT_APP_BE_URL}/medias`);
      if (response.ok) {
        let data = await response.json();
        console.log("medias", data);
        const dataMovie = data.Search;

        this.setState({
          ...this.state,
          movies: data,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return (
      <Row Row className="justify-content-center no-gutters">
        {this.state.movies.map((objectOfMovies) => {
          return (
            <Col xs={2} key={objectOfMovies.imdbID}>
              <SingleMovie objectOfMovies={objectOfMovies} />
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default ThirdComponent;
