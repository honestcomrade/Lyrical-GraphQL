import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchSong from '../queries/fetchSong';
import { Link } from 'react-router';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends Component {

  render() {
    const { song } = this.props.data;

    if (this.props.data.loading) { 
      return <div></div>; 
    }
    
    return(
      <div>
        <div className="row">
          <Link to="/" className="waves-effect btn left buttone">
            <i className="material-icons left">navigate_before</i>Go Back
          </Link>
        </div>
        <div className="row">
          <h4>
            Song Detail
          </h4>
          <h4>
            { song.title }
          </h4>
          <LyricList lyrics={ song.lyrics } />
          <LyricCreate songId={ this.props.params.id } />
        </div>

      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);