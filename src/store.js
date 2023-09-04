import { legacy_createStore } from 'redux';
import themeReducer from './redux/reducer';


const store = legacy_createStore(themeReducer);

export default store;
