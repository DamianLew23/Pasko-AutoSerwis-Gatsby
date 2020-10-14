import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Background from "./Background"

const Hero = ({ fluid, homepage, preserveStackingContext, heroContent }) => {
  const { title, subTitle, link } = heroContent;
  return (
    <Wrapper>
      <Background fluid={fluid} homepage={homepage} preserveStackingContext={preserveStackingContext}>
        <article>
          {title && <h1>{title}</h1>}
          {subTitle && <h3>{subTitle}</h3>}
          {link && <Link to={`${link.url}`} className="btn">{link.text}</Link>}
        </article>
      </Background>
    </Wrapper >
  )
}

const Wrapper = styled.section`
  article {
    width: 85vw;
    color: var(--clr-white);
    text-align: center;

    h1 {
      font-size: 2.5rem;
      font-family: Nobile, Arial, Helvetica, sans-serif;
      text-transform: uppercase;
      font-weight: 500;
      line-height: 1.25;
      margin: 0 0 2rem 0;
      letter-spacing: 3px;
    }

    h3 {
      font-weight: 400;
      margin: 2rem 0 2rem 0;
      text-transform: none;
    }

    @media (min-width: 800px) {
      h1 {
        letter-spacing: 5px;
      }
    }
  }
`

export default Hero
