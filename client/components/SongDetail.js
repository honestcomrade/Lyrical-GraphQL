import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchSong from '../queries/fetchSong';
import { Link } from 'react-router';

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
          <h3>
            { song.title }
          </h3>
        </div>
      </div>
    );
  }
}

// export default SongDetail;
export default graphql(fetchSong, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);