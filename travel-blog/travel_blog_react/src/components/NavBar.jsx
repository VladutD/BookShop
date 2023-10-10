import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/" className="blog-title">
                Doi Aventurieri
            </Link>
            <ul>
                <Link to="/acasa" className="active">
                    Acasa
                </Link>
                <Link to="/blog">Blog</Link>
                <Link to="/galerie">Galerie</Link>
                <Link to="/despre">Despre</Link>
                <Link to="./contact">Contact</Link>
            </ul>
        </nav>
    );
}

function CustomerLink({ to, children, ...props }) {
    const path = window.location.pathname;

    return (
        <li className={path === to ? 'active' : ''}>
            <Link to={to} {...props}></Link>
        </li>
    );
}
