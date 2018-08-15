import React, { Component, Fragment } from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

function Main(props){

	return (
		<Fragment>
			<h1 className="list-books-title">My Reads</h1>
			<BookShelf />
			<Link
				to='/SearchPage'
				className='open-search'>
			</Link>
		</Fragment>
	)

}

export default Main