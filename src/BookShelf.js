import React from 'react'
import Book from './Book'

function BookShelf(props) {

	return (
		<div className='list-books-content'>
			<h2 className="bookshelf-title">{props.shelf.title}</h2>
			<ul className='books-grid'>
				{props.books
				.filter(book => book.shelf === `${props.shelf.dataShelf}`) //if the book's data.shelf value is one of the values in my shelf object, then display it
				.map(filteredBook => (
						<li key='{filteredBook.id}'>
							<Book book={filteredBook}
								  changeShelf={props.changeShelf}
							/>
						</li>
					))
				}
			</ul>
		</div>
	)
}

export default BookShelf

            // <div className="list-books-content">
            //   <div>
            //     <div className="bookshelf">
            //       <h2 className="bookshelf-title">Currently Reading</h2>