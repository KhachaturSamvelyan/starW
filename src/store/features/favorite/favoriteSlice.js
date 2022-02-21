import { createSlice, current } from '@reduxjs/toolkit';
import { getLocalStorage } from '../../../utils/localStorage';

const initialState = {
    favs: getLocalStorage('store')
}

  export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
      favoriteReducer: (state, action) => {
        state.favs.push(action.payload)
        console.log(initialState.favs)

      },
      favoriteDeleteReducer: (state, action) => {
        state.favs = state.favs.filter(item => {
          return item.id !== action.payload;
        })
       
      }
    },
  })
  
  export const { favoriteReducer, favoriteDeleteReducer } = favoriteSlice.actions

  export default favoriteSlice.reducer

	
