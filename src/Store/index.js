import {createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import MainReducer from './Reducers'

const Store = createStore(
    MainReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default Store;
