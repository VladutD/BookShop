import React from 'react';
import Header from '../components/header/Header';
import './Home.css';
import Articles from '../components/articles/Articles';

export default function Home() {
    return (
        <>
            <Header />
            <div className="home">
                <Articles />
            </div>
        </>
    );
}
