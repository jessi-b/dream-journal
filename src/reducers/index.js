import toggleFormReducer from './toggle-form-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  displayForm: toggleFormReducer,
  firestore: firestoreReducer
});

export default rootReducer;