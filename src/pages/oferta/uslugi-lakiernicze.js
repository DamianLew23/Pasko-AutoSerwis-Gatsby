import React from 'react'
import BackgroundImage from "gatsby-background-image"
import { graphql } from 'gatsby'

import Layout from "../../components/layout"
import Hero from "../../components/Hero"
import Content from "../../components/Content"
import SEO from "../../components/seo"

const UslugiLakierniczePage = ({ data }) => {
  const { header: { childImageSharp: { fluid: headerImage } } } = data;
  const { image: { childImageSharp: { fluid: aboutImage } } } = data;
  return (
    <Layout>
      <SEO title="Usługi Lakiernicze Rzeszów" description="Świadczymy Kompleksowe Usługi Lakiernicze. Posiadamy Własną Mieszalnię Kolorów. Wykorzystujemy Markowe Lakiery Wodne AutoColor AQUABASE." />
      <Hero fluid={headerImage} preserveStackingContext heroContent={heroContent} />
      <Content>
        <BackgroundImage
          Tag="div"
          fluid={aboutImage}
          className="bcg one"
        ></BackgroundImage>
        <div className="header two">
          <h3>Usługi Lakiernicze</h3>
          <div className="separator"></div>
          <p>
            Wykorzystujemy markowe wodne lakiery Autocolor AQUABASE.
        </p>
        </div>
        <div className="section-center three">
          <div>
            <p>
              <span className="dropcap">N</span>a miejscu posiadamy własną mieszalnię, dzięki czemu skracamy czas napraw lakierniczych oraz mamy pewność dobrania właściwego koloru. Wszystkie naprawiane samochody w naszej firmie są bardzo dokładnie czyszczone, tak więc klient otrzymuje auto w nienagannym stanie. Posiadamy profesjonalną kabinę lakierniczą, dzięki czemu na powłoce lakierniczej nie ma żadnych niepotrzebnych wtrąceń.
          </p>
          </div>
          <div>
            <p>
              Polakierowane elementy są również natychmiast wygrzewane w odpowiedniej temperaturze, znacznie skraca to czas oczekiwania oraz utrwala i zabezpiecza powłokę przed skrajnymi warunkami atmosferycznymi. Lakiernia posiada dużą strefę przygotowawczą – w pełni wentylowana, zdolna pomieścić 3 samochody. Na wyposażeniu mamy również specjalistyczne promienniki podczerwieni do napraw błyskawicznych.
          </p>
          </div>
        </div>
      </Content>
    </Layout>
  )
}

const heroContent = {
  title: "Usługi Lakiernicze Rzeszów",
}

export const query = graphql`
  {
    header:file(relativePath: {eq: "lakiernictwo-naglowek.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    image:file(relativePath: { eq: "lakiernictwo_w1250_h300.jpg" }) {
      childImageSharp {
        fluid(jpegQuality: 90, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default UslugiLakierniczePage

