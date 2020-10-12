import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Menu = () => {
  return (
    <Wrapper>
      <nav>
        <ul>
          <li>
            <Link to="/">Strona Główna</Link>
          </li>
          <li>
            <Link to="/">Oferta</Link>
          </li>
          <li>
            <Link to="/">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  float: right;
  color: var(--clr-white);

  nav {
    display: block;
  }

  ul {
    list-style: none outside;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }

  li {
    position: relative;
    margin: 0;
    display: block;
    float: left;
  }

  a {
    color: var(--clr-white);
    padding: 30px 0 !important;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0px;
  }
`

export default Menu
