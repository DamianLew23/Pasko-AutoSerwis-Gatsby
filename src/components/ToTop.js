import React, { useState } from 'react'
import styled from "styled-components"
import { FaArrowUp } from "react-icons/fa"
import { AnchorLink } from "gatsby-plugin-anchor-links";

const ToTop = () => {

    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    window.addEventListener('scroll', checkScrollTop);

    return (
        <Wrapper onClick={scrollToTop} style={{ display: showScroll ? 'block' : 'none' }}>
            <span><FaArrowUp /></span>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    border-radius: 4px 4px 0 0;
    right: 75px;
    border-radius: 4px 4px 0 0;
    background-color: #333;
    bottom: 0;
    height: 35px;
    position: fixed;
    padding: 5px 0 0 0;
    text-align: center;
    width: 48px;
    opacity: .9;
    z-index: 100000;
    transition: all .2s ease-in-out 0s;
    line-height: 35px;  
    -webkit-font-smoothing: antialiased;
    font-family: icomoon;
    font-size: 22px;
    color: var(--clr-white);
    transition-property: color,background-color,border-color;
    transition-duration: 0.2s;
    transition-timing-function: linear;

    :hover {
       background-color: var(--clr-primary-1); 
    }

    span {
        overflow: hidden;
        text-align: center;
        margin: 0 auto;
    }
`

export default ToTop
