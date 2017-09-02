import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import query from '../queries/fetchSongs';

class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { title: '' };
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.mutate({
      variables: {
        title: this.state.title
      },
      refetchQueries: [{ query }]
    }).then(() => hashHistory.push('/'))
  }

  render() {
    return (
      <div>
        <div className="row">
          <Link to="/" className="waves-effect btn left goback">
            <i className="material-icons left">navigate_before</i>Go Back
          </Link>
        </div>
        <div className="row">
          <h3>
            Create a New Song
          </h3>
        </div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title:</label>
            <input
            onChange={ event => this.setState({ title: event.target.value })}
            value={ this.state.title } />
        </form>
      </div>
    );
  }
  
}

const mutation = gql `
mutation AddSong($title: String){ 
  addSong(title: $title) {
    title
  }
}
`;

export default graphql(mutation)(SongCreate);