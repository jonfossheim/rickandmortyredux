import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { createStore, compose, applyMiddleware } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import initialReducer from './store/reducers/initialReducer'

import './index.css';
import App from './App';
import FrontPage from "./pages/FrontPage";
import CharacterSpecific from "./pages/CharacterSpecific";
import About from "./pages/About";
import Contact from './pages/Contact'
import * as serviceWorker from './serviceWorker';


export const store = createStore(
    initialReducer,
    compose(
        applyMiddleware(thunk),
        devToolsEnhancer()
    )
)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route path='/' exact component={FrontPage} />
                    <Route path='/character/:id' component={CharacterSpecific} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
                </Switch>
            </App>
        </Router>
    </Provider>,

    document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
