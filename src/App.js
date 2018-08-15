import React, { Component, Fragment } from 'react'
import Main from './Main'
import SearchPage from './SearchPage'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {

  render() {
    return (
      <Fragment>
        <Main />
        <SearchPage />
      </Fragment>
    )
  }

}

export default BooksApp