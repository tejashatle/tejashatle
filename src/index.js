import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavigationBar from './Components/NavigationBar';
import About from './Components/About';
import TechStack from './Components/Techstack';
import MyWork from './Components/MyWork';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavigationBar />
    <About/>
    <TechStack/>
    <MyWork/>
    <Contact/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
