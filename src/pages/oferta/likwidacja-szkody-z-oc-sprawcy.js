import React from 'react'
import BackgroundImage from "gatsby-background-image"
import { graphql } from 'gatsby'

import Layout from "../../components/layout"
import Hero from "../../components/Hero"
import Content from "../../components/Content"
import SEO from "../../components/seo"

const LikwidacjaSzkodyOc = ({ data }) => {
  const { header: { childImageSharp: { fluid: headerImage } } } = data;
  const { image: { childImageSharp: { fluid: aboutImage } } } = data;
  return (
    <Layout>
      <SEO title="Likwidacja Szkody z OC Sprawcy" description="Bezgotówkowe Rozliczenie Szkody To Najszybszy Sposób Na Przywrócenie Samochodu Do Stanu Sprzed Kolizji." />
      <Hero fluid={headerImage} preserveStackingContext heroContent={heroContent} />
      <Content>
        <div className="header one">
          <h3>Likwidacja Szkody z OC Sprawcy</h3>
          <div className="separator"></div>
          <p>
            Bezgotówkowe rozliczenie szkody to najszybszy sposób na przywrócenie samochodu do stanu sprzed kolizji.
        </p>
        </div>
        <BackgroundImage
          Tag="div"
          fluid={aboutImage}
          className="bcg two"
        ></BackgroundImage>
        <div className="section-center three">
          <div>
            <p>
              <span className="dropcap">B</span>ezgotówkowe rozliczenie szkody to najszybszy i najłatwiejszy sposób na przywrócenie samochodu do stanu sprzed kolizji. Nasz serwis blacharsko-lakierniczy wykonuje najwyższej jakości naprawy powypadkowe. Dzięki współpracy naszej firmy z wszystkimi ubezpieczycielami działającymi na rynku, szkody mogą być rozliczane w systemie bezgotówkowym.
          </p>
          </div>
          <div>
            <p>
              To my zajmujemy się wszystkimi szczegółami z towarzystwem ubezpieczeniowym. Dbamy o interesy naszych klientów także, gdy wycena rzeczoznawców jest mało korzystna. Klient jedynie odstawia do nas samochód, a po krótkim czasie odbierają w pełni sprawny.</p>
          </div>
        </div>
      </Content>
    </Layout>
  )
}

const heroContent = {
  title: "Likwidacja Szkody z OC Sprawcy",
}

export const query = graphql`
  {
    header:file(relativePath: {eq: "likwidacja-szkody-z-oc-sprawcy.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    image:file(relativePath: { eq: "shutterstock_569376328.jpg" }) {
      childImageSharp {
        fluid(jpegQuality: 90, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default LikwidacjaSzkodyOc
