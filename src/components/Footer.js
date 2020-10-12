import React from "react"
import styled from "styled-components"
import { FaFacebookSquare } from "react-icons/fa"

const Footer = () => {
  return (
    <Wrapper>
      <footer>
        <div className="section-center grid">
          <div>
            <p>© Copyright {new Date().getFullYear()}</p>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/Zakład-Usługowo-Handlowy-PAŚKO-112205276982594/" rel="nofollow" target="_blank">
              <FaFacebookSquare />
            </a>
          </div>
        </div>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  background-color: var(--clr-secondary-1);

  footer {
    padding-top: 38px;
    padding-right: 30px;
    padding-bottom: 36px;
    padding-left: 30px;
    color: var(--clr-white);
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .social-icons {
    text-align: right;
    
    a {
      color: var(--clr-white);
      font-size: 2rem;
      line-height: 2rem;
    }
  }
`

export default Footer
