import {  Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';
import PeoplePage  from '../PeoplePage/PeoplePage';
import HomePage from '../HomePage/HomePage';
import Header from '../../components/Header/Header';
import styles from './App.module.css';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import PersonPage from '../PersonPage/PersonPage';
import FavoritePage from '../FavoritePage/FavoritePage';
import SearchPage from '../SearchPage/SearchPage';


export const App = () => {
  return (
    <>
          <div className={styles.wrapper}>
            <Header/>
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/people" element={<PeoplePage/>}/>
              <Route path="*" exact="false" element={<NotFoundPage/>}/>
              <Route path="not-found"  element={<NotFoundPage/>}/>
              <Route path="/people/:id"  element={<PersonPage/>}/>
              <Route path="/favorites"  element={<FavoritePage/>}/>
              <Route path="/search"  element={<SearchPage/>}/>

            </Routes>
        

          </div>
		

    </>
  ) 
}