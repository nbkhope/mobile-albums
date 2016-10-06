import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  // you can also set the initial state like this,
  // instead of putting it in the constructor(props) { ... }
  state = {
    albums: []
  };

  componentWillMount() {
    //const API_URL = 'https://mobile-albums.firebaseio.com/albums.json';
    const API_URL = 'https://rallycoding.herokuapp.com/api/music_albums';
    const API_KEY = 'QFJgbXHThymKRO4IfrgRqP4j7yLIurYlgs5gfQpq';

    axios.get(`${API_URL}?auth=${API_KEY}`)
      .then((response) => {
        console.log(response);
        this.setState({ albums: response.data });
      });
  }

  renderAlbums() {
    return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
};

export default AlbumList;
