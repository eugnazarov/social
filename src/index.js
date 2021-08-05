import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {MuiThemeProvider} from "material-ui";
import {getMuiTheme} from "material-ui/styles";
import {darkBlack, grey100} from "material-ui/styles/colors";

const muiTheme = getMuiTheme({
    palette: {
        alternateTextColor: darkBlack,
        primary1Color: grey100,
    }
})
ReactDOM.render(
  <React.StrictMode>
      <MuiThemeProvider muiTheme={muiTheme}>
    <App />
      </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
