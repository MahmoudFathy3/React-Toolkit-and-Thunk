import React, {Fragment, useRef, useEffect} from 'react';
import './Form.css' ;
import { useDispatch, useSelector } from 'react-redux';
import { insetBooks } from '../../Store/bookSlice/bookSlice';

const Form = () => {
  const {isLogin} = useSelector(state =>  state.AuthSlice);

  const dispatch = useDispatch();
  const title = useRef(null);
  const price = useRef(null);
  const description = useRef(null);

  const handleSubmit = (e) =>{
    e.preventDefault();
    const data = {
      title: title.current.value,
      price: price.current.value,
      description: description.current.value,
    }    
    dispatch(insetBooks(data))
    console.log(data);
    title.current.value = null;
    price.current.value = null;
    description.current.value = null;
  }

  // Change color With Themes Mode
  const DarkTheme = JSON.parse(localStorage.getItem('Themes'));
  // useEffect(() => {},)

  return(
    <Fragment>
      <form onSubmit={handleSubmit} >
      <h2>Insert Book</h2>
        <div className="mb-3">
          <label htmlFor='formGroupExampleInput'>Title</label>
          <input type="text"  className="form-control" id="formGroupExampleInput" ref={title} placeholder="Your Title" required/>
        </div>
        <div className="mb-3">
          <label htmlFor='formGroupExamplenumber'>Price</label>
        <input type="number"  className="form-control" id="formGroupExamplenumber" ref={price} placeholder="Your Price" required/>
        </div>
        <div className="mb-3">
          <label>Description</label>
          <textarea className="form-control" ref={description} style={{"height": "100px"}} required></textarea>
        </div>
          <button type="submit" className="btn btn-primary" disabled={!isLogin}>Submit</button>
      </form>
    </Fragment>
      ) 
};

export default Form;
