import React,{Fragment} from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { ToggleLogin } from '../../Store/Auth/AuthSlice';
import './Header.css';

const Header = () => {
  const {error} = useSelector(state => state.bookSlice);
  const {isLogin} = useSelector(state => state.AuthSlice);
  const dispatch = useDispatch();

  return (
    <Fragment>
  <header>
    <div className="container">
    <nav>
      <h3>MyBooks</h3>
      <ul>
        <li><a href='# ' onClick={() => dispatch(ToggleLogin())}>
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
