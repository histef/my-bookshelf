import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import SearchField from './SearchField'

function SearchPage(){
	return (
		<Fragment>
			<div className='search-books-bar'			>
				<Link
					to='/'
					className='close-search'>
				</Link>
				<SearchField
					className='search-books-input-wrapper'
				/>
			</div>
			<div className='search-books-results'>
				<p className='books-grid'>Book</p>
			</div>
		</Fragment>
	)
}

export default SearchPage

        //PAGE   <div className="search-books">
        //SEARCHBAR&LINK WRAPPER    <div className="search-books-bar">
        //LINK       <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
        //FORM       <div className="search-books-input-wrapper">
        //INPUT         <input type="text" placeholder="Search by title or author"/>
        //       </div>
        //     </div>
        //BOOK     <div className="search-books-results">
        //BOOK       <ol className="books-grid"></ol>
        //     </div>
        //   </div>
        // )