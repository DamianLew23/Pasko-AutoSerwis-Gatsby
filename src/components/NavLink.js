import React from 'react'
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyContext } from "../context/context"
import links from '../constants/links'


const NavLink = ({ link }) => {
    const { label, url, subPages } = link;
    return (
        <Wrapper>
            <Link to={url}><button>{label}</button></Link>
            {
                subPages.length > 0 ? <div className="links">
                    {
                        subPages.map((link, index) => {
                            const { url, icon, label } = link;
                            return <Link to={url} key={index}>{icon} {label}</Link>
                        })
                    }
                    <div className="caret"></div>
                </div> : null
            }
        </Wrapper>
    )
}

const Wrapper = styled.li`
  padding: 1rem 0;
  position: relative;
  button {
    color: var(--clr-white);
    background: transparent;
    border: transparent;
    font-size: 1rem;
    letter-spacing: 2px;
    font-weight: 500;
    padding: 10px 20px;
    width: 100%;
    text-transform: capitalize;
    position: relative;
  }
  .links {
    position: absolute;
    top: 4rem;
    left: 50%;
    transform: translateX(-50%);
    visibility: hidden;
    padding: 1rem;
    background: var(--clr-white);
    border-radius: var(--radius);
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem 2rem;
    grid-gap: 1rem 4rem;
    a {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0.5rem;
      grid-gap: 0.5rem;
      min-width: 200px;
      align-items: center;
      color: #0a2540;
      text-transform: capitalize;
      font-weight: 600;
      font-size: 0.7rem;
      .icon {
        color: #88add2;
      }
      &:hover {
        color: #88add2;
        .icon {
          color: #0a2540;
        }
      }
    }
  }
  &:hover .links {
    visibility: visible;
  }

  .caret {
    display: block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid var(--clr-white);
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
  }
`

export default NavLink
