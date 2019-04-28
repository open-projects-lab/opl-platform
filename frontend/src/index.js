import React from 'react';
import ReactDOM from 'react-dom';
import {MuiThemeProvider} from '@material-ui/core';
import './index.css';
import {Provider} from 'react-redux';
import {Route, Router} from 'react-router-dom';
import App from './App';
import history from './history';
import * as serviceWorker from './serviceWorker';
import store from './store';
import theme from './theme';


const MainApp = props => (
    <MuiThemeProvider theme={theme}>
        <Provider store={store} {...props}>
            <Router history={history}>
                <Route path="/" component={App}/>
            </Router>
        </Provider>
    </MuiThemeProvider>
);

ReactDOM.render(<MainApp/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
