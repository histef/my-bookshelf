import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import Main from './Main'
import SearchPage from './SearchPage'
import * as BooksAPI from './BooksAPI'
import './App.css'

const context = React.createContext();

class MyProvider extends Component {

}


class BooksApp extends Component {
  state = {
        data: []
      }

  componentDidMount(){
    this.fetchAllBooks();
  }

  fetchAllBooks = () => {
    BooksAPI.getAll()
    .then( data => {
      this.setState({ data });
      console.log(data)
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    this.fetchAllBooks();

  }

  render() {
    return (
      <Fragment>
        <Route
        	exact path='/'
        	render={()=> (
        		<Main
              books={this.state.data}
              changeShelf={this.changeShelf}
            />
        	)}
        />
        <Route
        	exact path='/SearchPage'
        	render={()=> (
  	        <SearchPage
              books={this.state.data}
              changeShelf={this.changeShelf}
            />
          )}
        />
      </Fragment>
    )
  }

}

export default BooksApp