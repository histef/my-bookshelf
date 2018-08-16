import React, { Fragment } from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

function Main(props){

	return (
		<Fragment>
			<h1 className="list-books-title">My Reads</h1>
			<BookShelf books={props.books} />


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