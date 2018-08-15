import React, { Component, Fragment } from 'react'

function BookShelf() {
	return (
		<Fragment>
			<h2 className="bookshelf-title">Currently Reading</h2>
				<p>books with state of 'currently reading'</p>
			<h2 className="bookshelf-title">Want to Read</h2>
				<p>books with state of 'Want to Read'</p>
			<h2 className="bookshelf-title">Read</h2>
				<p>books with state of 'Read'</p>
		</Fragment>
		)
}

export default BookShelf