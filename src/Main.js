import React, { Component, Fragment } from 'react'
import BookShelf from './BookShelf'

function Main(props){

	return (
		<Fragment>
			<h1 className="list-books-title">My Reads</h1>
			<BookShelf />
		</Fragment>
	)

}

export default Main