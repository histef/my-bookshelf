import React, { Fragment } from 'react'
import Book from './Book'

function BookShelf(props) {

	return (
		<Fragment>
			<h2 className="bookshelf-title">{props.shelf.title}</h2>
			<ul className='books-grid'>
				{props.books.filter(book => book.shelf === `${props.shelf.dataShelf}`)
					.map(filteredBook => (
						<li key='{filteredBook.id}'>
							<Book book={filteredBook}/>
						</li>
					))
				}
			</ul>
		</Fragment>
	)
}

export default BookShelf

            // <div className="list-books-content">
            //   <div>
            //     <div className="bookshelf">
            //       <h2 className="bookshelf-title">Currently Reading</h2>