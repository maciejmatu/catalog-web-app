import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'antd';
import * as booksActions from '../services/books/actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.createBook = this.createBook.bind(this);
  }

  createBook() {
    this.props.actions.createBook('The lord of the rings');
  }

  booksRow = (book, index) => (<li key={index}>{book}</li>);

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <Button onClick={this.createBook}>Add book</Button>
        <ul>
          {this.props.books.map(this.booksRow)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(booksActions, dispatch)
  };
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
