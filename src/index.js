import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addComment } from './actions';
import { removeComment } from './actions';
import { editComment } from './actions';
import { thumbDownComment } from './actions';
import { thumbUpComment } from './actions';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './reducer';


const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));

