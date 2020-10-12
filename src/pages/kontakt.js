import React from 'react'
import { graphql } from 'gatsby'
import styled from "styled-components"
import { FaHome, FaPhoneAlt, FaAt } from "react-icons/fa"

import Layout from "../components/layout"
import Hero from "../components/Hero"
import SEO from "../components/seo"
import ContactForm from "../components/ContactFrom"

const Kontakt = ({ data }) => {
    const { header: { childImageSharp: { fluid: headerImage } } } = data;
    return (

        <Layout>
            <SEO title="Kontakt" />
            <Hero fluid={headerImage} preserveStackingContext heroContent={heroContent} />
            <Wrapper className="section section-center">
                <div>
                    <h3>Dane Kontaktowe</h3>
                    <div className="address">
                        <h4><FaHome /> Adres</h4>
                        <p>ul. Jana Pawła II 201, 35-317 Rzeszów</p>
                    </div>
                    <div>
                        <h4><FaPhoneAlt /> Telefon</h4>
                        <p>696-603-546, 660-254-369</p>
                    </div>
                    <div>
                        <h4><FaAt /> Email</h4>
                        <p>biuro@pasko-autoserwis.pl</p>
                    </div>
                </div>
                <ContactForm />
            </Wrapper>
        </Layout >
    )
}

const heroContent = {
    title: "Kontakt",
}

export const query = graphql`
  {
    header:file(relativePath: {eq: "middle-image.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Wrapper = styled.section`
display: grid;
grid-template-columns: 1fr 2fr;
grid-gap: 2rem;
grid-auto-rows: minmax(100px, auto);

.address {
    margin: 2rem 0 0 0;
}
`

export default Kontakt
