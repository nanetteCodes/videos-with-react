import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyB8oLhorsKbMeR1-LRe8ERAaOwfb32d4e8';
//Create new component. Should produce some HTML
// the JSX gets turned into HTML and renders onto the page
const App = () => {
  return <div>Hi!</div>;
}
//take the component generated HTML and put it on the page (the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
