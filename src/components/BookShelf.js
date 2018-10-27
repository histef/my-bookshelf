import React from 'react';
import Book from './Book';

const BookShelf = ({ books, shelf, changeShelf }) => {

	return (
		<div className='list-books-content'>
			<h2 className="bookshelf-title">{shelf.title}</h2>
			<ul className='books-grid'>
				{books
				.filter(book => book.shelf === `${shelf.dataShelf}`) //if the book's APIdata.shelf value is one of the values in my shelf object, then display it
				.map(filteredBook => (
					<li key={filteredBook.id}>
						<Book book={filteredBook}
						  changeShelf={changeShelf}
						  getShelf={filteredBook.shelf}
						/>
					</li>
					))
				}
			</ul>
		</div>
	)
}

export default BookShelf;
