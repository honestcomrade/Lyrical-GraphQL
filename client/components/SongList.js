import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSongs';

class SongList extends Component {

  onSongDelete(id) {
    this.props.mutate({ 
      variables: { id } })
      .then(() => this.props.data.refetch());
    
  }

  renderSongs() {
    return this.props.data.songs.map(({ id, title }) => {
      return (
        <li key={ id } className="collection-item">
          { title }
          <i className="material-icons right"
            onClick={() => this.onSongDelete(id) }>
            delete
          </i>
        </li>
      );
    });
  };   
    
  render() {
    if(this.props.data.loading) {
      return <div></div>;
    }
    return(
      <div>
        <div>
          <h4 className="heading-border">
            Check out the latest songs
          </h4>
        </div>
        <div>
          <ul className="collection">
            { this.renderSongs() } 
          </ul>
          <Link to="/songs/new" className="waves-effect waves-light btn right buttontwo">
            <i className="material-icons right plus-button">add</i>New Song
          </Link>
        </div>
      </div>
    );
  };

}

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(
  graphql(query)(SongList)
);
