import React from 'react';
import './App.css';
import './font.css'
import {Nav} from "./components/nav/Nav";
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Footer} from "./components/footer/Footer";

function App() {
  return (
    <>
        <Nav/>
        <Header/>
        <Main/>
        <Footer/>
    </>
  );
}

export default App;
