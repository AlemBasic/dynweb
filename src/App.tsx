// App.tsx
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Products from "./Pages/Products";
import {Users} from "./Pages/Users";
import {Carts} from "./Pages/Carts";
import {NavBar} from "./NavBar";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <h1>Her starter man å koble inn ting som steg nr.1</h1>
            Edit <code>src/App.tsx</code> and save to reload.
            <h2>Man plasser linken til andre sidenen under som bruker Fake Shop på internet for å vise dynamisk innhold
              (forskjell mellom dynamisk og statisk side)</h2>
            <table id="min tabel">
              <td>
                <NavBar />
                <Routes>
                  <Route path="/users" element={<Users />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/carts" element={<Carts />} />
                </Routes>
              </td>
            </table>
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
}

export default App;
