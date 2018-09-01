import React, { Component,Fragment } from 'react'
import { Link } from 'react-router-dom'

import SearchField from './SearchField'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

import escapeRegExp from 'escape-string-regexp'

class SearchPage extends Component {

	state = {
		query: '',
		searchBooks: [],
		//will handle if no book matches search
		booksInSearchBooks: true //set initially to true, until first query - (initialize searchfield)
	}

	updateQuery = (query) => {
		this.setState({ query })
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
						booksInSearchBooks:false })
				} else {

					this.setState({
						searchBooks: books,
						booksInSearchBooks:true })
				}
			})
		} else {
			this.setState({	searchBooks: [] })
		}
	}

	match = () => {
		this.setState ({booksInSearchBooks: true})
	}

	render() {
		let matchBooks

		if (this.state.query){
			const match = new RegExp(escapeRegExp(this.state.query), 'i');
			matchBooks = this.state.searchBooks.filter( book => match.test(book.title))
		} else {
			matchBooks = this.state.searchBooks
		}

		console.log(this.state.searchBooks);

		return (

			<Fragment>
				<div className='search-books-bar'>
					<Link
						to='/'
						className='close-search'>
					</Link>
					<SearchField
						className='search-books-input-wrapper'
						value={this.state.query}
						updateQuery={this.updateQuery}
					/>
				</div>
				<div className='search-books-results'>
					{this.state.booksInSearchBooks === true ?
	 					<ul className='books-grid'>
							{
								matchBooks.map(filteredBook => {
									let shelf = 'none';

									this.props.books.map(book =>(
										book.id === filteredBook.id && (shelf = book.shelf)
									))

								return(
							<li key={filteredBook.id}>
								<Book
									book={filteredBook}
									changeShelf={this.props.changeShelf}
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


export default SearchPage

