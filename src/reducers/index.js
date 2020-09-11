import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as fromReducer } from 'redux-form';
import streamReducer from './streamReducer'
export default combineReducers({
    auth: authReducer,
    form: fromReducer,
    streams: streamReducer
})