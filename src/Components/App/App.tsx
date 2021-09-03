import React from 'react';
import './App.css';
import {MainHeader} from "./MainHeader/MainHeader";
import {Main} from "./Main/Main";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="wrapperRow">
          <MainHeader/>
          <Main />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
