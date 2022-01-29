import React, {Fragment} from 'react';

const List = ({isLoading, books, isLogin,deleteBooks,Dispatch,DarkTheme}) => {
  // const DarkTheme = JSON.parse(localStorage.getItem('Themes'));

  // style={{color: DarkTheme.Color}}

  const BookList = books.length > 0 ? (books.map(item => {
    return(
      <Fragment key={item.id}>
        {isLoading ? (<p>Loading...</p>)
        : (
        <div className="info" key={item.id} >
          <h3 >{item.title}</h3>
          <div className="btn">
          <button type="button" className="btn btn-primary">Read</button>
          <button type="button" className="btn btn-danger" disabled={!isLogin} onClick={() => Dispatch(deleteBooks(item.id))}>Delete</button>
          </div>
        </div>        
      )}
      </Fragment>
    ) 
  })) : ('There are no books available')

  return(
  <div className="List">
    <h2 >Books List</h2>
      {BookList}
  </div>
  )
};

export default List;
