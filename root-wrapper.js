import React from "react"
import { createGlobalStyle } from "styled-components"
import { GatsbyProvider } from "./src/context/context"

//provider

const GlobalStyle = createGlobalStyle`
/*
=============== 
Variables
===============
*/

:root {
  /* primary colors*/
  --clr-primary-1: hsl(241, 26%, 52%);
  --clr-primary-2: hsl(241, 26%, 52%);
  --clr-primary-3: hsl(241, 26%, 52%);
  --clr-primary-4: hsl(241, 26%, 52%);
  --clr-primary-5: hsl(241, 23%, 56%);

  /* secondary color */
  --clr-secondary-1: hsl(240, 16%, 26%);
  --clr-secondary-2: hsl(240, 16%, 26%);
  --clr-secondary-3: hsl(240, 16%, 26%);
  --clr-secondary-4: hsl(240, 16%, 26%);
  --clr-secondary-5: hsl(240, 16%, 26%);

  /* darkest grey - used for headings */
  --clr-grey-1: hsl(209, 61%, 16%);
  --clr-grey-2: hsl(211, 39%, 23%);
  --clr-grey-3: hsl(0, 0%, 45%);
  --clr-grey-4: hsl(209, 28%, 39%);

  /* grey used for paragraphs */
  --clr-grey-5: hsl(210, 22%, 49%);
  --clr-grey-6: hsl(209, 23%, 60%);
  --clr-grey-7: hsl(211, 27%, 70%);
  --clr-grey-8: hsl(210, 31%, 80%);
  --clr-grey-9: hsl(212, 33%, 89%);
  --clr-grey-10: #f1f5f8;


  --clr-white: #fff;
  --clr-black: #000;
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-green-dark: hsl(125, 67%, 44%);
  --clr-green-light: hsl(125, 71%, 66%);
  --clr-black: #222;
  --ff-primary: "Roboto", sans-serif;
  --ff-secondary: "Open Sans", sans-serif;
  --ff-headers: "Nobile", "Arial", "Helvetica", sans-serif;
  --transition: all 0.3s linear;
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --max-width: 3000px;
  --fixed-width: 620px;
}
/*
=============== 
Global Styles
===============
*/

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  font: 112.5%/1.45em georgia, serif, sans-serif;
  box-sizing: border-box;
  overflow-y: scroll;
}

body {
  font-family: var(--ff-secondary);
  background: var(--clr-white);
  color: var(--clr-grey-1);
  line-height: 2;
  font-size: 0.875rem;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
  cursor: auto;
}
img {
  width: 100%;
  display: block;
}

h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 1rem;
  font-family: var(--ff-headers);
  font-weight: 400;
}
h1 {
  font-size: 2rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}
p {
  font-size: 15px;
  margin-bottom: 1.25rem;
  color: var(--clr-grey-3);
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 3.5rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  p {
  font-size: 15px;
  margin-bottom: 1.25rem;
  color: var(--clr-grey-3);
}
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}
/*  global classes */

.btn {
  text-transform: uppercase;
  background: var(--clr-primary-1);
  color: var(--clr-white);
  letter-spacing: var(--spacing);
  display: inline-block;
  font-family: PT Sans;
  font-weight: 700;
  transition: var(--transition);
  font-size: 18px;
  font-style: normal;
  letter-spacing: 0px;
  border-width: 0px;  
  border-style: solid;
  cursor: pointer;
  border-radius: var(--radius);
  transition: all .2s;
  -webkit-box-shadow: inset 0px 1px 0px #fff,0px 5px 0px #525287,1px 7px 7px 3px rgba(0,0,0,0.3);
  -moz-box-shadow: inset 0px 1px 0px #fff,0px 5px 0px #525287,1px 7px 7px 3px rgba(0,0,0,0.3);
  box-shadow: inset 0px 1px 0px #fff,0px 5px 0px #525287,1px 7px 7px 3px rgba(0,0,0,0.3);
  outline: 0;
  padding: 17px 40px;
  line-height: 21px;
  cursor: pointer;
}
.btn:hover {
  background: var(--clr-primary-5);
}

.btn-center {
  margin: 0 auto;
}

/* section */
.section {
  padding: 3rem 0;
  position: relative;
}

.section-center {
  width: 95vw;
  margin: 0 auto;
  max-width: var(--max-width);
}
@media screen and (min-width: 992px) {
  .section-center {
    width: 95vw;
  }
}

/* separator */
 .separator {
  color: #747474;
  border-color: #000000;
  border-top-style: solid;
  border-top-width: 1px;
  box-sizing: border-box;
  display: block;
  margin-top: 1rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 170px; 
  height: auto;
  clear: both;
  position: relative;
  z-index: 11;  
 }

 /* dropcap */
 .dropcap {
   color: var(--clr-white);
   background-color: var(--clr-primary-1);
   height: 51px;
width: 51px;
line-height: 51px;
border-radius: 8px;
background-clip: padding-box;
font-size: 45px;
box-shadow: 0 1px 1px rgba(0,0,0,.2);
display: inline-flex;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
position: relative;
top: 4px;
float: left;
margin-right: 10px;
padding: 0;
text-transform: uppercase;
 }

  .content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  grid-auto-rows: minmax(100px, auto);
  }

`

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      <GatsbyProvider>
        {element}
      </GatsbyProvider>
    </>
  )
}
