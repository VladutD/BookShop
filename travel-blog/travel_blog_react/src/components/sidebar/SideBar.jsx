import './SideBar.css';
import { Link, NavLink } from 'react-router-dom';

export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">Despre noi</span>
                <img
                    className="us-img"
                    src={require('../../assets/article-img/us-img.JPG')}
                    alt="Poza cu doua persoane"
                ></img>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ad
                    repudiandae eligendi odio perferendis nulla, necessitatibus ullam assumenda
                    optio reprehenderit totam eius.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categorii</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Copenhaga</li>
                    <li className="sidebarListItem">Horsens</li>
                    <li className="sidebarListItem">Pisa</li>
                    <li className="sidebarListItem">Florenta</li>
                    <li className="sidebarListItem">Lake District</li>
                    <li className="sidebarListItem">Liverpool</li>
                    <li className="sidebarListItem">Chatsworth House</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <div className="sidebarTitle">
                    <span className="sidebarTitle">Urmareste-ne!</span>
                    <div className="sidebarSocial">
                        <i className="sidebarIcon fa-brands fa-facebook"></i>
                        <i className="sidebarIcon fa-brands fa-instagram"></i>
                        <i className="sidebarIcon fa-brands fa-youtube"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}
