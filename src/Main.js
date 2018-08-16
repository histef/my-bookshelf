import React, { Fragment } from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

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
			/>
			<BookShelf
				books={props.books}
				shelf={wantToRead}
			/>
			<BookShelf
				books={props.books}
				shelf={read}
			/>
			<Link
				to='/SearchPage'
				className='open-search'>
			</Link>
		</Fragment>
	)

}

export default Main

    // <div className="list-books">
    //         <div className="list-books-title">
    //           <h1>MyReads</h1>
    //         </div>