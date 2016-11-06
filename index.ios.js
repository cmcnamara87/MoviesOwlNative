import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View, ScrollView } from 'react-native';
import moment from 'moment';
import Time from './app/Time';

class MoviesOwlNative extends Component {
  constructor(props) {
    super(props);
    this.state = {movies: []}
  };

  getMoviesFromApi() {
    return fetch('http://moviesowl.com/api/v1/cinemas/29/movies')
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.data;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    console.log('fetching now');
    this.getMoviesFromApi().then((movies) => {
      this.setState({
        movies: movies
      })
    });
  };

  render() {
    return (
      <ScrollView>
      <Text>blah blah blah new line</Text>
      <Text>Brisbane Myer Center</Text>
        {this.state.movies.map((movie) => {
          return <View key={movie.id}><Text>{movie.title} {movie.tomato_meter}%</Text>
          {movie.showings.data.map((showing) =>
            <Time key={showing.id} startTime={showing.start_time}></Time>)
          }
          </View>
        })}
      </ScrollView>

    )
  }
}

AppRegistry.registerComponent('MoviesOwlNative', () => MoviesOwlNative);
