import React,{Fragment, useEffect} from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { ToggleLogin } from '../../Store/Auth/AuthSlice';
import { MdLightMode } from 'react-icons/md';
import { ToggleMode } from '../../Store/ModeSlice';
import './Header.css';

const Header = () => {
  const {error} = useSelector(state => state.bookSlice);
  const {isLogin} = useSelector(state => state.AuthSlice);

  const dispatch = useDispatch();

  useEffect(() =>{
    const header = document.querySelector('header');
    window.onscroll = () =>{
      if(window.scrollY > 600){
        header.classList.add('fixed');
      } else{
        header.classList.remove('fixed');
      }
    }
  },[])



  return (
    <Fragment>
  <header>
    <div className="container">
    <nav>
      <h3>MyBooks</h3>
      <ul>
        <span><MdLightMode onClick={() => dispatch(ToggleMode())} /> </span>
      <li><a href="# "  onClick={() => dispatch(ToggleLogin())}>
          {isLogin ? 'Logout' : 'Login'}
          </a></li>
      </ul>
    </nav>
    </div>
  </header>
  {error &&
      (<div className="alert alert-danger mt-3" role="alert">
        {error}
      </div>)
      }
    </Fragment>
  )
};

export default Header;
