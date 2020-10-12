import React from 'react'
import styled from "styled-components"

const Content = ({ children }) => {
  return (
    <Wrapper className="section">
      { children}
    </Wrapper>
  )
}


const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  grid-auto-rows: minmax(100px, auto);

  .one {
    grid-column-start: 1;
    grid-column-end: 2;
  }

  .two {
    grid-column-start: 2;
    grid-column-end: 3;
  }

  .three {
    grid-column-start: 1;
    grid-column-end: 3;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    grid-auto-rows: minmax(100px, auto);
    max-width: 1170px;
  }

  .four {
    grid-column-start: 1;
    grid-column-end: 3;
    display: grid;
    justify-content: center;
    align-items: center;
  }

  .bcg {
    /* MUST!!!!!! */
    min-height: 35vh;
    max-height: 50vh;
    max-width: 50vw;
    place-items: center;
    margin: 0 0 20px 0;
  }
  .bcg::before {
    opacity: 1;
  }

  .header {
    padding: 30px 15% 30px 30px;

    h3 {
    font-size: 2.5rem;
    line-height: 1.5;
    font-family: Nobile, Arial, Helvetica, sans-serif;
    font-weight: 400;
    letter-spacing: 0px;
    margin-bottom: 0;
    }

    p {
      font-size: 1.5rem;
      line-height: 1.5;
      font-family: Nobile, Arial, Helvetica, sans-serif;
      font-weight: 400;
      letter-spacing: 0px;
      color: var(--clr-grey-1);
    }
  }

  ul {
    color: var(--clr-grey-3);
    font-size: 15px;
    list-style-type: disc;
    margin: 0 0 1rem 2rem;
  }

`

export default Content
