import { configureStore } from '@reduxjs/toolkit';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
import  favoriteReducer  from './features/favorite/favoriteSlice';

export const store = configureStore({
    reducer: {
        favorite: favoriteReducer,
       
    },
})



store.subscribe(() => {
    setLocalStorage('store', store.getState().favorite.favs)
});

