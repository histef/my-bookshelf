import React, { Fragment } from 'react'


function SearchField(props){

	return (
		<Fragment>
			<form>
	        	<input
	        		type="text"
	        		placeholder="Search by title or author"
	        		value={props.value}
	        		onChange={(event)=> props.updateQuery(event.target.value)}
	        	/>
			</form>
		</Fragment>
	)
}

export default SearchField


    //           <div className="search-books-input-wrapper">
    //             <input type="text" placeholder="Search by title or author"/>
    //           </div>
