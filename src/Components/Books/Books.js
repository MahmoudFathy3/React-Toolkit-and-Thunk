import React, {useEffect} from 'react';
import './Books.css';
import List from './List/List';
import BooksDetails from './BooksDetails/BooksDetails';
import { useDispatch, useSelector } from 'react-redux';
import { GetBooks, deleteBooks } from '../../Store/bookSlice/bookSlice';

const Books = () => {
  const Dispatch = useDispatch();
  const {isLoading , books} = useSelector(state =>  state.bookSlice);
  const {isLogin} = useSelector(state =>  state.AuthSlice);

  useEffect(()=>{
    Dispatch(GetBooks())
  },[Dispatch])
  

  return <div className="Books">
      <List isLoading={isLoading} books={books} isLogin={isLogin} Dispatch={Dispatch} deleteBooks={deleteBooks}/>
      <BooksDetails />
  </div>;
};

export default Books;
