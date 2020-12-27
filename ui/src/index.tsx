import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './assets/apollo/apolloClient';
import { Provider as ReduxProvider} from 'react-redux'
import store from './assets/redux/store'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);