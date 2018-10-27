import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import BookShelf from './BookShelf';

const Main = ({ books, changeShelf }) => {
	const shelves = [{
		title: 'Currently Reading',
		dataShelf: 'currentlyReading'
  },
  {
		title: 'Want to Read',
		dataShelf: 'wantToRead'
	},
  {
		title: 'Read',
		dataShelf: 'read'
	}
]

	return (
		<Fragment>
			<h1 className="list-books-title">My Reads</h1>
      <ul className="bookshelf-list">
        {shelves.map( (mainShelf,index) =>
          <li key={index}>
      			<BookShelf
      				books={books}
      				shelf={mainShelf}
      				changeShelf={changeShelf}
      			/>
          </li>
        )}
      </ul>
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

export default Main;
