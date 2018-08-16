import React, { Fragment } from 'react'
import Book from './Book'

function BookShelf(props) {
	return (
		<Fragment>
			<h2 className="bookshelf-title">Currently Reading</h2>
			<ul className='books-grid'>
				{props.books.filter(book => book.shelf === 'currentlyReading')
					.map(book => (
						<li key='{book.id}'>
							<Book book={book}/>
						</li>
					))
				}
			</ul>
			<h2 className="bookshelf-title">Want to Read</h2>

			<h2 className="bookshelf-title">Read</h2>

		</Fragment>
	)
}

export default BookShelf

            // <div className="list-books-content">
            //   <div>
            //     <div className="bookshelf">
            //       <h2 className="bookshelf-title">Currently Reading</h2>