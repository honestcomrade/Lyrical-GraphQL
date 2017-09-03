import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchSong from '../queries/fetchSong';

class SongDetail extends Component {

  render() {
    const { song } = this.props.data;

    if (this.props.data.loading) { 
      return <div></div>; 
    }
    
    return(
      <div>
        <h2>
          Song Detail
        </h2>
        <h3>
          { song.title }
        </h3>
      </div>
    );
  }
}

// export default SongDetail;
export default graphql(fetchSong, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);