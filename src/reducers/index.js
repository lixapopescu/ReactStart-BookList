import { combineReducers } from 'redux';
import BooksReducers from './reducers_books';
import ActiveBookReducer from './reducer_active_book';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  books: BooksReducers,
  activeBook: ActiveBookReducer
});

export default rootReducer;
