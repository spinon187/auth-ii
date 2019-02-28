import { combineReducers } from 'redux';
import { signupReducer } from './signupReducer';
import { loginReducer } from './loginReducer';
import { listReducer } from './listReducer';

import axios from 'axios';

axios.defaults.withCredentials = true;

const rootReducer = combineReducers({
    signup: signupReducer,
    login: loginReducer,
    list: listReducer
});

export default rootReducer;
