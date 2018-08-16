import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import Main from './Main'
import SearchPage from './SearchPage'
import * as BooksAPI from './BooksAPI'
import './App.css'


class BooksApp extends Component {
  state = {
        data: []
      }

  componentDidMount(){
    BooksAPI.getAll()
    .then( data => {
      this.setState({ data });
    })
  }

  render() {
    return (
      <Fragment>
        <Route
        	exact path='/'
        	render={()=> (
        		<Main books={this.state.data}/>
        	)}
        />
        <Route
        	exact path='/SearchPage'
        	render={()=> (
  	        <SearchPage books={this.state.data}/>
          )}
        />
      </Fragment>
    )
  }

}

export default BooksApp