import React from 'react';
import './SingleArticle.css';
import '../sidebar/SideBar.css';



export default function singleArticle() {
    return (
        <div className="single-article">
            <div className="single-article-wrapper">
                <img
                    src={require('../../assets/article-img/articleimg11.jpg')}
                    alt="Imagine din Copenhaga"
                    className="img-article"
                ></img>
                <h1 className="art-title">
                    Culoarea si...Danemarca
                    <div className="article-like">
                        <i className="like-icon fa-regular fa-heart"></i>
                    </div>
                </h1>
                <div className="article-info">
                    <p className="author">Autor: Doi Aventurieri</p>
                    <p className="data">Cu 3 zile in urma</p>
                </div>
                <p className="article-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis dolor
                    delectus eveniet ab natus magnam, exercitationem aspernatur amet fuga neque in
                    molestias unde iste nulla nemo deserunt reprehenderit quia. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Amet dolores, perspiciatis laborum
                    doloremque tempore commodi porro voluptas perferendis, sequi nihil mollitia
                    tenetur dolorem labore ipsam assumenda earum obcaecati possimus ad! Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Temporibus sunt explicabo
                    praesentium ut, asperiores, repellendus quaerat dolore aliquam dolor unde, nobis
                    earum esse culpa corporis neque corrupti aperiam. Dolores, dicta. Lorem ipsum
                    dolor, sit amet consectetur adipisicing elit. Nostrum quos aliquid distinctio
                    accusamus non ratione saepe nulla, modi cupiditate repellat! Mollitia eius
                    molestiae adipisci quisquam vero provident, vitae exercitationem placeat! Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Labore temporibus animi
                    facere laborum enim maiores consectetur! Sit aspernatur, eligendi perspiciatis,
                    consequatur ut ratione debitis tenetur recusandae necessitatibus, molestias
                    consectetur laborum! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Minus, enim? Dignissimos vitae exercitationem quod doloremque adipisci eum iusto
                    quidem quasi pariatur nobis atque harum excepturi, maiores, earum magnam tempore
                    repellendus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
                    veritatis quis quidem rerum dolore praesentium sunt iste sapiente facilis
                    repellat. Aperiam animi assumenda hic non recusandae, adipisci aliquid quibusdam
                    sequi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae vero
                    rerum repudiandae nesciunt? Qui nostrum dicta provident! Deserunt ad, ipsa
                    beatae laudantium illum, nihil ut ullam voluptate tenetur aliquid commodi? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Impedit magni soluta, culpa
                    reprehenderit aspernatur mollitia eligendi, porro exercitationem id est neque
                    assumenda debitis praesentium doloribus minus perferendis omnis veritatis
                    laudantium. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Facilis distinctio, vel minus iure, quos illum harum, itaque officia accusamus
                    neque earum quia reprehenderit autem possimus? Rerum modi numquam atque
                    perspiciatis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
                    mollitia repudiandae expedita saepe harum commodi cupiditate, fugit laboriosam
                    debitis quas quis fuga beatae velit nostrum vitae eum earum! Voluptatum,
                    necessitatibus. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Adipisci fugiat explicabo recusandae. Beatae quam sapiente voluptates dolorum
                    vel sunt repellat error quas, porro nemo, accusamus ipsum? Aliquam recusandae
                    corporis earum. lorem
                </p>
            </div>
        </div>
    );
}
