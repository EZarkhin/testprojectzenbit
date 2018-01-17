import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {reducer} from './reducers/reducer'
import thunk from 'redux-thunk';
import {compose} from "recompose";


const store = createStore(reducer,  compose(
    applyMiddleware(thunk)
)
)

ReactDOM.render(<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
