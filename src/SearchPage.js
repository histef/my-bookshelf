import React, { Component, Fragment } from 'react'
import SearchField from './SearchField'

function SearchPage(){
	return (
		<Fragment>
			<SearchField />
			<p>Book results</p>
		</Fragment>
	)
}

export default SearchPage