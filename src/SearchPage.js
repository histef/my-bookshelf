import React, { Component,Fragment } from 'react'
import { Link } from 'react-router-dom'
import SearchField from './SearchField'
// import Book from './Book'

class SearchPage extends Component {

	state = {
		query: ''
	}

	updateQuery = (query) => {
		this.setState({ query })
	}

	render(){

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
					<ul>
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