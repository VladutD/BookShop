import React from 'react';
import './Blog.css';
import Articles from '../articles/Articles';

export default function Blog() {
    return (
        <>
            <h2 className="big-title">Blog</h2>
            <div>
                <h4 className="other-title">S-ar putea sa iti placa</h4>
            </div>

            <div className="big-article">
                <div className="article">
                    <img
                        className="articleImg"
                        src={require('../../assets/article-img/article-img1.jpg')}
                        alt="imagine din Florenta"
                    ></img>

                    <div className="article-container">
                        <div className="articleInfo">
                            <div className="article-category">
                                <p className="article-categories">Calatorii</p>
                                <p className="article-categories">Noi descoperiri</p>
                                <p className="article-categories">Noutati</p>
                            </div>
                            <h4 className="article-title">Florenta, orasul perfect</h4>
                            <hr />
                            <p className="article-description">
                                De Florenta nu te saturi intr-o vacanta intreaga, insa este o
                                destinatie pe care o poti alege si pentru un city break. Fiecare
                                vizita se transforma intr-o experienta culturala conform gusturilor
                                si intereselor personale, asa ca, daca vrei sa gusti frumusetea
                                zonei, trebuie gasesti un echilibru in petrecerea timpului in oras
                                si descoperirea unor locuri de poveste din Toscana. In 72 de ore te
                                poti bucura de principalele atractii, multe adunate in jurul
                                centrului istoric sit al Patrimoniului Mondial UNESCO, si-ti poti
                                face timp si pentru o ecapada in imprejurimi.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="article">
                    <img
                        className="articleImg"
                        src={require('../../assets/article-img/article-img2.JPG')}
                        alt="imagine din Copenhaga"
                    ></img>

                    <div className="article-container">
                        <div className="articleInfo">
                            <div className="article-category">
                                <p className="article-categories">Calatorii</p>
                                <p className="article-categories">Noi descoperiri</p>
                                <p className="article-categories">Noutati</p>
                            </div>
                            <h4 className="article-title">Santa Maria di Nuova</h4>
                            <hr />
                            <p className="article-description">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab modi
                                fugit doloremque, quo explicabo sed. Vero iure mollitia rem error
                                voluptas, eligendi maiores odio sit, expedita itaque dolorum, quo
                                ex!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Deserunt, sint illum dolor hic ipsum laborum a ullam sit nihil
                                accusantium numquam! Non ut ad accusamus consequatur alias rem illo
                                cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ratione expedita, fugit autem hic qui ea tenetur consequuntur,
                                accusantium repellendus distinctio rem voluptatibus veritatis
                                explicabo temporibus assumenda recusandae nemo corporis architecto.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero vel
                                deleniti asperiores optio quidem quisquam provident autem
                                perspiciatis, omnis dicta? Explicabo, culpa eum labore doloremque
                                quod fugit itaque cum ratione! Lorem ipsum, dolor sit amet
                                consectetur adipisicing elit. Rem ea adipisci quod rerum. Dolor,
                                facere ipsam inventore accusantium earum nam nulla aliquam
                                consectetur distinctio quod aperiam quam et id voluptatibus. Lorem
                                ipsum dolor sit, amet consectetur adipisicing elit. Eius dolorum
                                debitis amet. Sint non ullam qui neque. Illum et voluptates deserunt
                                ipsum dolore? Error in, eligendi commodi aperiam laudantium aliquid?
                            </p>
                        </div>
                    </div>
                </div>

                <div className="article">
                    <img
                        className="articleImg"
                        src={require('../../assets/article-img/article-img3.jpg')}
                        alt="imagine din Copenhaga"
                    ></img>

                    <div className="article-container">
                        <div className="articleInfo">
                            <div className="article-category">
                                <p className="article-categories">Calatorii</p>
                                <p className="article-categories">Noi descoperiri</p>
                                <p className="article-categories">Noutati</p>
                            </div>
                            <h4 className="article-title">
                                Cum sa calatoresti eficient cu avionul
                            </h4>
                            <hr />
                            <p className="article-description">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab modi
                                fugit doloremque, quo explicabo sed. Vero iure mollitia rem error
                                voluptas, eligendi maiores odio sit, expedita itaque dolorum, quo
                                ex!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Deserunt, sint illum dolor hic ipsum laborum a ullam sit nihil
                                accusantium numquam! Non ut ad accusamus consequatur alias rem illo
                                cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ratione expedita, fugit autem hic qui ea tenetur consequuntur,
                                accusantium repellendus distinctio rem voluptatibus veritatis
                                explicabo temporibus assumenda recusandae nemo corporis architecto.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero vel
                                deleniti asperiores optio quidem quisquam provident autem
                                perspiciatis, omnis dicta? Explicabo, culpa eum labore doloremque
                                quod fugit itaque cum ratione! Lorem ipsum, dolor sit amet
                                consectetur adipisicing elit. Rem ea adipisci quod rerum. Dolor,
                                facere ipsam inventore accusantium earum nam nulla aliquam
                                consectetur distinctio quod aperiam quam et id voluptatibus. Lorem
                                ipsum dolor sit, amet consectetur adipisicing elit. Eius dolorum
                                debitis amet. Sint non ullam qui neque. Illum et voluptates deserunt
                                ipsum dolore? Error in, eligendi commodi aperiam laudantium aliquid?
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Articles />
        </>
    );
}
