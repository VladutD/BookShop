import React from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import './App.css';
import Gallery from './components/gallery/Gallery';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact.jsx';

import About from './components/about/About';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <NavBar />

            <div className="container">
                <Routes>
                    <Route path="/acasa" element={<Home />}></Route>
                    <Route path="/blog" element={<Blog />}></Route>
                    <Route path="/galerie" element={<Gallery />}></Route>
                    <Route path="/despre" element={<About />}></Route>
                    <Route path="contact" element={<Contact />}></Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
