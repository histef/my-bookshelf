import React from 'react';
import PropTypes from 'prop-types';

function Book({ book, changeShelf, getShelf }){
	return (
    <div className='book'>
  		<div className="book-top">
  			<div
  				className="book-cover"
  				style={{ width: 128, height: 193, backgroundImage: book.imageLinks ? `url("${book.imageLinks.thumbnail}")`: '' }}></div>
          	<div className="book-shelf-changer">
                <select
                  onChange={(event) => changeShelf(book, event.target.value)}
                  value={getShelf}
                >
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
      </div>
    </div>
	)
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  changeShelf: PropTypes.func.isRequired,
  getShelf: PropTypes.string.isRequired
}

export default Book;
