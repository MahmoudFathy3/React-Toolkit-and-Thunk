import React, {useEffect, useMemo} from 'react';
import './App.css';
import Form from './Components/Form/Form';
import Books from './Components/Books/Books';
import Header from './Components/Header/Header';
import {useSelector} from 'react-redux';

function App() {
  const {isDark} = useSelector(state =>  state.DarkMode)

 // Change Background With Themes Mode
 const DarkMode = JSON.parse(localStorage.getItem('Dark'));

    useMemo(() => {
        if(DarkMode) {
          const DarkTheme = {background: '#1F1A24', color: 'white'}
          localStorage.setItem('Background',JSON.stringify(DarkTheme))
          console.log(true);
        } else {
          const LightTheme = {background: 'white', color: '#000'};
          localStorage.setItem('Background',JSON.stringify(LightTheme))
          console.log(false);
        }
    }, [DarkMode])

    const Themes = JSON.parse(localStorage.getItem('Background'))

  return (
    <div className="App" style={{background: Themes.background, color: Themes.color}}>
        <Header />
      <div className="container">
        <Form />
        <Books />
      </div>
    </div>
  );
}

export default App;
