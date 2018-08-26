import React, { Fragment } from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Main(props){

	const currentlyReading = {
		title: 'Currently Reading',
		dataShelf: 'currentlyReading'
	}

	const wantToRead = {
		title: 'Want to Read',
		dataShelf: 'wantToRead'
	}

	const read = {
		title: 'Read',
		dataShelf: 'read'
	}

	return (
		<Fragment>
			<h1 className="list-books-title">My Reads</h1>
			<BookShelf
				books={props.books}
				shelf={currentlyReading}
				changeShelf={props.changeShelf}
			/>
			<BookShelf
				books={props.books}
				shelf={wantToRead}
				changeShelf={props.changeShelf}
			/>
			<BookShelf
				books={props.books}
				shelf={read}
				changeShelf={props.changeShelf}
			/>
			<Link
				to='/SearchPage'
				className='open-search'>
			</Link>
		</Fragment>
	)
}

Main.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
}

export default Main
