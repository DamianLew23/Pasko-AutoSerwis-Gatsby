import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled, { keyframes } from "styled-components"


const Background = ({ fluid, homepage, preserveStackingContext, children }) => {
  return (
    <Wrapper>
      <BackgroundImage
        Tag="div"
        fluid={fluid}
        className={`bcg ${homepage && "bcg-homepage"}`}
        preserveStackingContext={preserveStackingContext}
      >
        {children}
      </BackgroundImage>
    </Wrapper>
  )
}

const fadeIn = keyframes`
      from{
         background-color:rgb(0,0,0,0.8);
      }
      to{
        background-color:rgba(0,0,0,0.4);
      }
      `

const Wrapper = styled.section`
  .bcg {
    /* MUST!!!!!! */
    min-height: 70vh;
    margin-top: -5rem;
    display: grid;
    place-items: center;
    animation: ${fadeIn} 2s ease-in-out 1 forwards;
  }
  .bcg::before {
    opacity: 1;
  }
  .bcg-homepage {
    min-height: 105vh;
    margin-top: -5rem;
  }
`

export default Background
