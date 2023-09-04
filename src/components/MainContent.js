import React from 'react';
import { useSelector } from 'react-redux';
import { Link,Route,Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './contact';
import Service from './About';

const MainContent = () => {
  const darkTheme = useSelector((state) => state.darkTheme);

  const themeClass = darkTheme ? 'dark-theme' : 'light-theme';

  return (
    <div className={`main-content ${themeClass}`}>
      <h1>Welcome to the Dark/Light Theme App</h1>
      <p>This is the main content of the app.</p>
      <ul>
  <li> <Link to="/">Home</Link></li>
  <li> <Link to="/service">Service</Link></li>
  
  <li> <Link to="/contact">contact</Link></li>
  <Routes>

<Route path="/" element={<Home />} />

<Route path="/service" element={<Service />} />




<Route path="/contact" element={<Contact />} />
</Routes>

  
  
</ul>
    </div>
  );
};

export default MainContent;
