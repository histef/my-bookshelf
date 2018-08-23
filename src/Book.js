import React from 'react'

function Book(props){
	return (
        <div className='book'>
		<div className="book-top">
			<div
				className="book-cover"
				style={{ width: 128, height: 193, backgroundImage: props.book.imageLinks ? `url("${props.book.imageLinks.thumbnail}")`: '' }}></div>
        	<div className="book-shelf-changer">
              <select>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
           <div className="book-title">{props.book.title}</div>
           <div className="book-authors">{props.book.authors}</div>
        </div>
        </div>
	)
}

export default Book

//bookshelf comp <div className="bookshelf">
//bookshelf-h2       <h2 className="bookshelf-title">Currently Reading</h2>
//bookshelf-book div       <div className="bookshelf-books">
//book Comp-ul         <ol className="books-grid">
//book-li          <li>
//             <div className="book">
//               <div className="book-top">
//                 <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
//book-select                 <div className="book-shelf-changer">
//book-select                   <select>
//book-select                     <option value="move" disabled>Move to...</option>
//book-select                     <option value="currentlyReading">Currently Reading</option>
//book-select                     <option value="wantToRead">Want to Read</option>
//book-select                     <option value="read">Read</option>
//book-select                     <option value="none">None</option>
//book-select                   </select>
//book-select                 </div>
//book-select               </div>
//book-li               <div className="book-title">To Kill a Mockingbird</div>
//book-li               <div className="book-authors">Harper Lee</div>
//             </div>
//           </li>