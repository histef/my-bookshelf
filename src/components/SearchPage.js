import React, { Component,Fragment } from 'react';
import { Link } from 'react-router-dom';
import escapeRegExp from 'escape-string-regexp';

import SearchField from './SearchField';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';

class SearchPage extends Component {

	state = {
		query: '',
		searchBooks: [],
		//will handle case that no book matches the search. Set initially to true, until first query - (initialize searchfield)
		booksInSearchBooks: true
	}

	updateQuery = (query) => {
		this.setState({ query });
		this.showSearched(query.trim());
		this.match();
	}

	//method to push books that match query to searchBooks array
	showSearched = query => {
		if(query){
			BooksAPI.search(query)
			.then((books)=>{
				if(books.error){
					this.setState({
						searchBooks: [],
						booksInSearchBooks:false });
				} else {

					this.setState({
						searchBooks: books,
						booksInSearchBooks:true });
				}
			})
		} else {
			this.setState({	searchBooks: [] });
		}
	}

	match = () => {
		this.setState ({booksInSearchBooks: true});
	}

	render() {
    const { books, changeShelf } = this.props;
    const { searchBooks, query } = this.state;
		let matchBooks;

		if (query){
			const match = new RegExp(escapeRegExp(query), 'i');
			matchBooks = searchBooks.filter( book => match.test(book.title));
		} else {
			matchBooks = searchBooks;
		}

		return (

			<Fragment>
				<div className='search-books-bar'>
					<Link
						to='/'
						className='close-search'>
					</Link>
					<SearchField
						className='search-books-input-wrapper'
						value={query}
						updateQuery={this.updateQuery}
					/>
				</div>
				<div className='search-books-results'>
					{this.state.booksInSearchBooks === true ?
	 					<ul className='books-grid'>
							{
								matchBooks.map(filteredBook => {
									let shelf = 'none';

									books.map(book =>(
										book.id === filteredBook.id && (shelf = book.shelf)
									));

  								return(
      							<li key={filteredBook.id}>
      								<Book
      									book={filteredBook}
      									changeShelf={changeShelf}
      									getShelf={shelf}
      								/>
      							</li>
  								)
  							})
							}
						</ul>
					 :
						<p className="no-match">No matches found</p>
					}
				</div>
			</Fragment>
		)
	}
}


export default SearchPage;

