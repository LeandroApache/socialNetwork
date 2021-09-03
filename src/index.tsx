import React from 'react';
import './index.css';
import {store} from "./Redux/Store-redux";
import ReactDOM from "react-dom";
import App from "./Components/App/App";
import {Provider} from "react-redux";

let rerenderEntireTree = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>
    ,
    document.getElementById('root')
  );
}

rerenderEntireTree();
store.subscribe(rerenderEntireTree);



