import React from 'react';
import '../about/About.css';
import Newsletter from '../newsletter/Newsletter';
import Footer from '../../components/footer/Footer';

export default function About() {
    return (
        <>
            <div className="about-cont">
                <div className="photo">
                    <img
                        className="us-photo"
                        src={require('../../assets/article-img/us-img.JPG')}
                        alt=""
                    ></img>

                    <div className="info-about">
                        <h4 className="about-title">Hai sa ne cunoastem!</h4>
                        <p>
                            Noi suntem doi aventurieri si nimic altceva. Ne place sa descoperim
                            locuri extraordinare alturi de oameni extraordinari. Acesta este
                            principalul motiv pentru care am descis cu dfraga inima si venim si in
                            fata voastra cu aventurile noastre, cu sfaturi si bineinteles, cu multa
                            prietenie.
                        </p>
                    </div>
                </div>
            </div>

            <div className="about-container">
                <div className="photo">
                    <div className="info-about">
                        <h4 className="about-title">Vai sa vedem lumea cu ochi frumosi!</h4>
                        <p>
                            Lumea e frumoasa si imensa. cu siguranta nu o vom strabate noi pe toata,
                            dar sigur, ne voim face amintiri demne de povestit cu nepotii la o cana
                            cu ceai. Daaaar...pana la nepoti mai avem cale lunga, asa ca, noi vom
                            impartasi toate trairile si aventurile noastre cu voi. Stati cu ochii pe
                            site!
                        </p>
                    </div>

                    <img
                        className="us-photo"
                        src={require('../../assets/article-img/us-img2.JPG')}
                        alt=""
                    ></img>
                </div>
            </div>

            <Newsletter />
            <Footer />
        </>
    );
}
