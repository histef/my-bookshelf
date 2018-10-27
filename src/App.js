import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import Main from './components/Main';
import SearchPage from './components/SearchPage';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends Component {
  state = {
        books: []
  }

  componentDidMount(){
    this.fetchAllBooks();
  }

  fetchAllBooks = () => {
    //This collection represents the books currently in the bookshelves in your app.
    BooksAPI.getAll()
    .then( books => {
      this.setState({ books });
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    this.fetchAllBooks();
  }

  render() {
    const { books } = this.state;

    return (
      <Fragment>
        <Route
        	exact path='/'
        	render={()=> (
        		<Main
              books={books}
              changeShelf={this.changeShelf}
            />
        	)}
        />
        <Route
        	exact path='/SearchPage'
        	render={()=> (
  	        <SearchPage
              books={books}
              changeShelf={this.changeShelf}
            />
          )}
        />
      </Fragment>
    )
  }
}

export default BooksApp;