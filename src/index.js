import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import {ApolloProvider} from 'react-apollo'
import client from './client'

ReactDOM.render(
    <ApolloProvider client={client}>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </ApolloProvider>
, document.getElementById('root'));