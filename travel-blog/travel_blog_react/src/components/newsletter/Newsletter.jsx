import React from 'react';
import { useState } from 'react';
import './Newsletter.css';

export default function Newsletter() {
    const [data, setData] = useState(null);
    const [print, setPrint] = useState(false);
    function getData(val) {
        setData(val.target.value);
        setPrint(false);
        console.log(val.target.value);
    }

    return (
        <>
            <div className="newsletter">
                <div className="newsletter-container">
                    <form className="form" onSubmit={getData}>
                        <h2 className="newsletter-text">
                            Aboneaza-te la newsletter si fii primul care citeste noutatile
                        </h2>

                        <input
                            className="form-input"
                            type="email"
                            placeholder="alexcristea@gmail.com"
                            onChange={getData}
                        />
                        <button onClick={() => setPrint(true)} className="form-btn" type="submit">
                            Trimite
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
