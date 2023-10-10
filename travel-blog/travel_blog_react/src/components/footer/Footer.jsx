import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-section">
                <div className="footer-links">
                    <div className="footer-icon">
                        <a href="https://www.facebook.com/madalina.alexandra.904/">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/alexandra_madalina09/">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                    </div>
                    <div className="footer-credit">
                        <p>&copy; DoiAventurieri 2023</p>
                        <p>Toate drepturile sunt rezervate</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
