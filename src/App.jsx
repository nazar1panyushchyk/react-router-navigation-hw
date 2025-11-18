import './App.css';
import { useState } from 'react';
import ColorPicker from './components/ColorPicker';
import Home from './components/Home';
import Counter from './components/Counter';
import Clock from './components/Clock';
import PokemonForm from './components/Form';
import PokemonView from './components/views/PokemonView';
import SignupForm from './components/SignupForm';
// import UserMenu from './components/UserMenu';
import styles from './components/css/Navigation.module.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

function App() {

   const colorOptions = [
    { label: "red", color: "#f44336" },
    { label: "green", color: "#4caf50" },
    { label: "blue", color: "#2196f3" },
    { label: "grey", color: "#607d8b" },
    { label: "pink", color: "#e91e63" },
    { label: "indigo", color: "#3f51b5" },
  ]

  const [pokemonName, setPokemonName] = useState();

   const handleSubmit = pokemonName => {
    console.log('Пошук покемона:', pokemonName);
    setPokemonName(pokemonName);
  };

  return (
    <>
    <BrowserRouter>
      <nav>
        {/* <NavLink to="/">Home</NavLink> */}
         <NavLink
              to="/"
              className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
              }
            >
              Форма
            </NavLink>
          <NavLink
              to="/colorpicker"
              className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
              }
            >
              Колорпікер
            </NavLink>
        <NavLink
             to="/counter"
              className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
              }
           >
             Лічильник
           </NavLink>
         <NavLink
             to="/clock"
             className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
              }
           >
             Годинник
           </NavLink>
             <NavLink
                 to="/pokemon"
                 className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
               >
                 Покемони
               </NavLink>
                {/* <NavLink
                 to="/user"
                 className={styles.link}
                 activeclassname={styles.activeLink}
               >
                 Профіль
               </NavLink> */}
      </nav>
      <Routes>
        {/* <Route path='/' element={<Home />}>Home</Route> */}
        {/* <Route path='/user' element={<UserMenu />}>UserMenu</Route> */}
        <Route path='/' element={<SignupForm />}>Signup</Route>
        <Route path='/colorpicker' element={<ColorPicker options={colorOptions} />}>ColorPicker</Route>
        <Route path='/counter' element={<Counter />}>Counter</Route>
        <Route path='/clock' element={<Clock />}>Clock</Route>
        <Route path='/pokemon' element={<div> <PokemonView onSubmit={handleSubmit} /> {pokemonName && ( <p>Ви шукаєте покемона: {pokemonName}</p> )} </div> } />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
