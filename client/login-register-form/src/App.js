import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import { Route, Routes } from 'react-router-dom';
import Home from './pageHome';
import Interface from './Interface';


function App() {
  // const [currentForm, setCurrentForm] = useState('login');

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Interface />}

        >
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/home' element={<Home />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
