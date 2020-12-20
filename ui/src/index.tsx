import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './assets/apollo/apolloClient';
import { Provider as ReduxProvider} from 'react-redux'
import store from './assets/redux/store'
import App from './App';

/* const { BrowserWindow } = window.require('electron').remote;
const remote = window.require('electron').remote;
function mainWindow() {
  console.log('Creando ventana de inicio...')

  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 700,
    icon: 'public/logo192.png',
    frame: false,
    webPreferences: {
      nodeIntegration: true,
    }
  })

  //mainWindow.loadFile('index.html')
  //mainWindow.loadURL(`file://${__dirname}/app/index.html`)
  mainWindow.loadURL('http://localhost:3000/welcome.html');

  mainWindow.webContents.openDevTools()
  console.log('Listo!')

  var secondWin = remote.getCurrentWindow()
  secondWin.close()
}*/

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>
        <App />
        {/* <header className="App-header">
        <p>Hello React and Electron</p>
        <button onClick={mainWindow}>Frameless window!</button>
        </header> */}
      </ReduxProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);