import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Layout from "../components/layout"
import Hero from "../components/Hero"
import Content from "../components/Content"
import ImageSeparator from "../components/ImageSeparator"
import Services from "../components/Services"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { header: { childImageSharp: { fluid: headerImage } } } = data;
  const { about: { childImageSharp: { fluid: aboutImage } } } = data;
  return (
    <Layout>
      <SEO title="Serwis Blacharsko - Lakierniczy Rzeszów" />
      <Hero fluid={headerImage} homepage preserveStackingContext heroContent={heroContent} />
      <Content>
        <BackgroundImage
          Tag="div"
          fluid={aboutImage}
          className="bcg one"
        ></BackgroundImage>
        <div className="two header">
          <h3>Kim Jesteśmy?</h3>
          <div className="separator"></div>
          <p>
            Działamy na rynku od ponad 20 lat. Świadczymy usługi kompleksowej
            obsługi samochodów osobowych w zakresie napraw powypadkowych.
        </p>
        </div>
        <div className="section-center three">
          <div>
            <p>
              <span className="dropcap">W</span>yróżnia nas bardzo dobra organizacja pracy. Dostarczamy
            profesjonalne usługi zgodne z obowiązującymi dzisiaj technologiami.
            Zajmujemy się kompleksowo blacharstwem oraz lakiernictwem.
            Prowadzimy również bezgotówkowe naprawy powypadkowe
          </p>
            <p>
              Nasi pracownicy mają ogromne doświadczenie w prowadzeniu napraw
              blacharsko-lakierniczych. Gwarantujemy, że wszystkie naprawy
              powypadkowe w naszym warsztacie zostaną przeprowadzone fachowo, a
              nowa powłoka lakiernicza będzie nie do odróżnienia względem
              fabrycznej. Służymy Państwu naszą wiedzą i doświadczeniem.
          </p>
          </div>
          <div>
            <p>
              Pojazdy naprawiamy w dużej hali warsztatowej, dzięki czemu mamy duże
              siły przerobowe. Blacharnia ma do dyspozycji ramę naprawczą oraz
              podnośnik samochodowy. Posiadamy system pomiarowy karoserii.
          </p>

            <p>
              Wszyscy nasi pracownicy mają do dostęp do markowych narzędzi
              ręcznych oraz zaawansowanych elektrycznie: spotter, szlifierki,
              polerki, spawarki, zgrzewarki itp. Warsztat znajduje się na dużym,
              zamykanym i monitorowanym placu, na którym możemy pomieścić
              kilkanaście samochodów. Dysponujemy lawetą.
          </p>

            <p>Posiadamy auta zastępcze dla naszych klientów.</p>
          </div>
        </div>
        <div className="section-center four">
          <AnchorLink to="/#nasza-oferta" title="Pasko-AutoSerwis - Zoabcz Naszą Oferte" className="btn btn-center">
            Zobacz Naszą Ofertę
          </AnchorLink>
        </div>
      </Content>
      <ImageSeparator />
      <Services />
    </Layout>
  )
}

const heroContent = {
  title: "SERWIS BLACHARSKO - LAKIERNICZY RZESZÓW",
  subTitle: "Wycena i Naprawy Powypadkowe",
  link: {
    url: "/#nasza-oferta",
    text: "Nasza Oferta"
  }
}

export const query = graphql`
  {
    header:file(relativePath: { eq: "background-homepage_1920.jpg" }) {
      childImageSharp {
        fluid(jpegQuality: 90, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    about:file(relativePath: { eq: "pasko-serwis-homepage-2.jpg" }) {
      childImageSharp {
        fluid(jpegQuality: 90, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default IndexPage
