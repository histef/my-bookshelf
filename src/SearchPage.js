import React, { Component,Fragment } from 'react'
import { Link } from 'react-router-dom'
import SearchField from './SearchField'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

import escapeRegExp from 'escape-string-regexp'

class SearchPage extends Component {

	state = {
		query: '',
		searchBooks: []
	}

	updateQuery = (query) => {
		this.setState({ query })
		this.showSearched(query);
	}


	showSearched = query => {
		if(query){
			BooksAPI.search(query)
			.then((books)=>{
				if(books.error){
					this.setState({ searchBooks: [] })
				} else {
					this.setState({searchBooks: books})
				}
			})
		} else {
			this.setState({	searchBooks: [] })
		}
	}

	render() {
		let matchBooks

		if (this.state.query){
			const match = new RegExp(escapeRegExp(this.state.query), 'i');
			matchBooks = this.state.searchBooks.filter( book => match.test(book.title))
		} else {
			matchBooks = this.state.searchBooks
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
						value={this.state.query}
						updateQuery={this.updateQuery}
					/>
				</div>
				<div className='search-books-results'>
					<ul className='books-grid'>
						{matchBooks.map(filteredBook => (
						<li key={filteredBook.id}>
							<Book book={filteredBook}/>
						</li>
					))
				}


					</ul>
				</div>
			</Fragment>
		)
	}
}

export default SearchPage


//TODO: filter thru books
//TODO: add book components

        //PAGE   <div className="search-books">
        //SEARCHBAR&LINK WRAPPER    <div className="search-books-bar">
        //LINK       <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
        //FORM       <div className="search-books-input-wrapper">
        //INPUT         <input type="text" placeholder="Search by title or author"/>
        //       </div>
        //     </div>
        //BOOK     <div className="search-books-results">
        //BOOK-OL       <ol className="books-grid"></ol>
        //     </div>
        //   </div>
        // )