import React from 'react';
import './SingleArt.css';
import SideBar from '../components/sidebar/SideBar';
import SingleArticle from '../components/singlearticle/SingleArticle';

export default function singleArt() {
    return (
        <div className="single-art">
            {/*article*/}
            <SingleArticle />
            <SideBar />
        </div>
    );
}
