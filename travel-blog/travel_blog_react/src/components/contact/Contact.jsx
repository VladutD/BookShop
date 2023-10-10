import React from 'react';
import '../contact/Contact.css';

export default function contact() {
    function onSubmit(e) {
        e.preventDefault();
    }
    return (
        <form className="form-contact" onSubmit={onSubmit}>
            <h2 className="formtitle">Hai sa discutam!</h2>
            <input className="inpt-contact" type="text" name="name" placeholder="Numele tau" />
            <input
                className="inpt-contact"
                type="email"
                name="email"
                id="email"
                placeholder="exemplu@gmail.com"
            />
            <input className="inpt-contact" type="phone" name="phone" placeholder="+40(Romania)" />
            <textarea
                className="inpt-contact"
                name="message"
                cols="30"
                rows="10"
                placeholder="Scrie mesajul tau aici"
            ></textarea>
            <button className="btn-contact" type="submit">
                Trimite
            </button>
        </form>
    );
}
