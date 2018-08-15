import React, { Component, Fragment } from 'react'
import Book from './Book'

function BookShelf() {
	return (
		<Fragment>
			<h2 className="bookshelf-title">Currently Reading</h2>
				<Book />books with state of 'currently reading'
			<h2 className="bookshelf-title">Want to Read</h2>
				<Book />books with state of 'Want to Read'
			<h2 className="bookshelf-title">Read</h2>
				<Book />books with state of 'Read'
		</Fragment>
		)
}

export default BookShelf