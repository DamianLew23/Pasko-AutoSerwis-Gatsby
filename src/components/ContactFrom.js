import React from 'react'
import styled from "styled-components"

const ContactFrom = () => {
    return (
        <Wrapper>
            <h3>Napisz Do Nas</h3>
            <p>Masz pytania odnośnie naszej oferty? Napisz do nas wiadomość za pomocą formularza kontaktowego. Odpowiemy tak szybko jak tylko możliwe.</p>

            <form>
                <p>
                    <label>
                        Imię i nazwisko (wymagane)
                        <br />
                        <input type="text" name="name" value-size="40" />
                    </label>
                </p>
                <p>
                    <label htmlFor="name">
                        Adres email (wymagane)
                        <br />
                        <input type="email" name="email" value-size="40" />
                    </label>
                </p>
                <p>
                    <label>
                        Temat
                        <br />
                        <input type="text" name="topic" value-size="40" />
                    </label>
                </p>
                <p>
                    <label>
                        Wiadomość
                        <br />
                        <textarea name="message" cols="40" rows="10"></textarea>
                    </label>
                </p>


                <button type="submit" className="btn">Wyślij</button>
            </form>
        </Wrapper >
    )
}

const Wrapper = styled.div`

input {
    padding-top: 0;
    padding-bottom: 0;
    padding: 8px 15px;
    height: 50px;
    background-color: #ffffff;
    font-size: 13px;
    color: #aaa9a9;
    border-width: 1px;
    border-color: #d2d2d2;
    border-radius: 0px;
    border: 1px solid #d2d2d2;
    margin-right: 0;
    box-sizing: border-box;
    float: none!important;
    width: 100%!important;
}

textarea {
    border: 1px solid #d2d2d2;
    width: 100%!important;
    height: 150px;
    padding: 8px 15px;
    box-sizing: border-box;
    margin-right: 0;
    background-color: #ffffff;
    font-size: 13px;
    color: #aaa9a9;
    border-width: 1px;
    border-color: #d2d2d2;
    border-radius: 0px;
    float: none!important;
    outline: 0;
    vertical-align: middle;
}
`
export default ContactFrom
