import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function SearchField({ value, updateQuery }){

	return (
		<Fragment>
			<form>
	        	<input
	        		type="text"
	        		placeholder="Search by title or author"
	        		value={value}
	        		onChange={ event => updateQuery(event.target.value)}
	        	/>
			</form>
		</Fragment>
	)
}

SearchField.propTypes = {
  value: PropTypes.string.isRequired,
  updateQuery: PropTypes.func.isRequired,
}

export default SearchField;

