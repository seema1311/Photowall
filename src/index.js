import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import App from './Components/App'
import './styles/stylesheet.css'
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'
// let MyLibrary
// if (typeof document !== 'undefined') {
//   MyLibrary = require('my-library').default
// }
// const list =["line 1","line 2","line 3"];
// const b=list;
// console.log(b)
// const element = React.createElement('strong',null,'Hello Worls!');
// const element = React.createElement('ol',null,
// React.createElement('li',null,'line 1'),
// React.createElement('li',null,'line 2'),
// React.createElement('li',null,'line 3'))
// // const element = (<div><h1>my list<ol><li>line 1</li>
// // <li>line 2</li>
// // <li>line 3</li></ol></h1></div>) 
// if (typeof document !== 'undefined') {
// ReactDOM.render(element, document.getElementById('root'));
//   }
console.log("index-file")
const store=createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
console.log("mapping store")
ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>,document.getElementById('root'));