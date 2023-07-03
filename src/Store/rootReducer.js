// Combine reducer to combine all reducer import from Redux
import {combineReducers} from 'redux';

// Importing all Reducers
import cartSlice from "./cartSlice.js";
import productsSlice from './productsSlice.js';

const rootReducer = combineReducers({
  cartSlice,
  productsSlice,
});

export default rootReducer;
