import React, { Component, Fragment } from 'react'

class SearchField extends Component {

	state = {
		query: ''
	}

	updateState = (query) => {
		this.setState({
			query: query.trim()
		})
	}

	render(){

	return (
		<Fragment>
			<form>
	        	<input
	        		type="text"
	        		placeholder="Search by title or author"
	        		value={this.state.query}
	        		onChange={(event)=>this.updateState(event.target.value)}
	        	/>
			</form>
		</Fragment>
		)
	}
}

export default SearchField


    //           <div className="search-books-input-wrapper">
    //             <input type="text" placeholder="Search by title or author"/>
    //           </div>
