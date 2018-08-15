import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import Main from './Main'
import SearchPage from './SearchPage'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {

  render() {
    return (
      <Fragment>
      <Route
      	exact path='/'
      	render={()=> (
      		<Main />
      	)}
      />
      <Route
      	exact path='/SearchPage'
      	render={()=> (
	        <SearchPage />
	    )}
	  />
      </Fragment>
    )
  }

}

export default BooksApp