import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import rootReducer from "./redux/rootReducer";

// function loggerMiddleware(store) {
//     return function (next) {
//         return function (action) {
//             const result = next(action);
//             console.log('Middleware', result)
//             console.log('Middleware store state', store.getState())
//             return result;
//         }
//     }
// }

const loggerMiddleware = store => next => action => {
    const result = next(action);
    console.log('Middleware', result)
    console.log('Middleware store state', store.getState())
    return result;
}

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware, reduxThunk));

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(
  <React.StrictMode>
      {app}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
