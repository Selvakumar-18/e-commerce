import './App.css';
import React from 'react';
import Wrapper from "./component/Wrapper";
import {Globalcontext} from './context/Globalcontext';

function App() {

  return (
    <Globalcontext>

       <Wrapper/>
      
    </Globalcontext>
  );
}

export default App;



