import React from 'react'
import BackgroundImage from "gatsby-background-image"
import { graphql } from 'gatsby'

import Layout from "../../components/layout"
import Hero from "../../components/Hero"
import Content from "../../components/Content"
import SEO from "../../components/seo"

const WykonwywanieKosztorysow = ({ data }) => {
  const { header: { childImageSharp: { fluid: headerImage } } } = data;
  const { image: { childImageSharp: { fluid: aboutImage } } } = data;
  return (
    <Layout>
      <SEO title="Wyceny Powypadkowe Rzeszów" description="Miałeś Stłuczkę Samochodową? Otrzymałeś Zaniżone Odszkodowanie? Z Nami Sprawdzisz, Ile Ci Się Należy!" />
      <Hero fluid={headerImage} preserveStackingContext heroContent={heroContent} />
      <Content>
        <div className="header one">
          <h3>Wyceny Powypadkowe</h3>
          <div className="separator"></div>
          <p>
            Miałeś Stłuczkę Samochodową? Otrzymałeś Zaniżone Odszkodowanie? Z Nami Sprawdzisz, Ile Ci Się Należy!
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
              <span className="dropcap">S</span>tłuczka samochodowa zawsze jest to nieprzyjemna sytuacja i źródło stresu. Wydaje Ci się jednak, iż mając ważne ubezpieczenie, firma ubezpieczeniowa wpłaci odpowiednią kwotę, która wystarczy na profesjonalną naprawę samochodu. Rzeczywistość jest jednak całkiem inna.
          </p>
            <p>
              Otrzymasz jedynie część kwoty potrzebnej do przywrócenia samochodu do stanu sprzed szkody. Towarzystwo ubezpieczeniowe próbuje oszukać własnego klienta, szczególnie takiego, który nie ma w tym zakresie żadnego doświadczenia.
          </p>
          </div>
          <div>
            <p>
              Jeśli jest to opis Twojej sytuacji, zapraszamy do skorzystania z Naszych usług:
          </p>

            <ul>
              <li>Wykonujemy profesjonalne kalkulacje napraw samochodów osobowych w programie AUDATEX – wieloletnie,</li>
              <li>Wykonamy oględziny, wyślemy do akceptacji kosztorys naprawy i zlikwidujemy szkody zgodnie z technologią,</li>
              <li>Zapewniamy bezpłatną analizę kosztorysów z OC i AC</li>
            </ul>

            <p>Posiadamy auta zastępcze dla naszych klientów.</p>
          </div>
        </div>
        <div className="section-center four">
          <p>Oferta skierowana głównie do osób fizycznych, które otrzymały zaniżone odszkodowanie od firmy ubezpieczeniowej. Na podstawie tego dokumentu udowodnisz prawdziwe koszty oraz zakres naprawy Twojego samochodu.</p>

          <p>Prowadzisz warsztat samochodowy i potrzebujesz kosztorysu? Zadzwoń lub napisz.</p>
        </div>
      </Content>
    </Layout>
  )
}

const heroContent = {
  title: "Wyceny Powypadkowe",
}

export const query = graphql`
  {
    header:file(relativePath: {eq: "wyceny-powypadkowe-naglowek.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    image:file(relativePath: { eq: "wyceny-kosztorysy.jpg" }) {
      childImageSharp {
        fluid(jpegQuality: 90, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default WykonwywanieKosztorysow
