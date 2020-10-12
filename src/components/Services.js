import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    image1: file(relativePath: { eq: "wyceny-kosztorysy-glowna.jpg" }) {
      childImageSharp {
        fixed(width: 292, height: 195) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    image2: file(relativePath: { eq: "lakiernictwo.jpg" }) {
      childImageSharp {
        fixed(width: 292, height: 195) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    image3: file(relativePath: { eq: "likwidacja-oc-sprawcy.jpg" }) {
      childImageSharp {
        fixed(width: 292, height: 195) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`

const Services = () => {
  const {
    image1: {
      childImageSharp: { fixed: img1 },
    },
    image2: {
      childImageSharp: { fixed: img2 },
    },
    image3: {
      childImageSharp: { fixed: img3 },
    },
  } = useStaticQuery(query)
  return (
    <Wrapper className="section section-center">
      <div className="title">
        <h2 id="nasza-oferta">Nasza Oferta</h2>
        <div className="separator"></div>
      </div>
      <div className="single-service">
        <div className="image">
          <Image fixed={img1} />
        </div>
        <div className="description">
          <Link to="/oferta/wykonywanie-kosztorysow"><h3>Wyceny Powypadkowe</h3></Link>
          <p>
            Miałeś stłuczkę samochodową? Otrzymałeś zaniżone odszkodowanie? Z
            nami sprawdzisz, ile Ci się należy. Oferta skierowana głównie do
            osób fizycznych, które otrzymały zaniżone odszkodowanie od firmy
            ubezpieczeniowej.
          </p>
        </div>
      </div>
      <div className="single-service">
        <div className="image">
          <Image fixed={img2} />
        </div>
        <div className="description">
          <Link to="/oferta/uslugi-lakiernicze"><h3>Usługi Lakiernicze</h3></Link>
          <p>
            Wykorzystujemy markowe lakiery wodne Autocolor AQUABASE. Posiadamy własną mieszalnię, dzięki czemu skracamy czas napraw oraz mamy pewność dobrania właściwego koloru.
          </p>
        </div>
      </div>
      <div className="single-service">
        <div className="image">
          <Image fixed={img3} />
        </div>
        <div className="description">
          <Link to="/oferta/likwidacja-szkody-z-oc-sprawcy"><h3>Likwidacja Szkody z OC</h3></Link>
          <p>
            Bezgotówkowe rozliczenie szkody to najszybszy sposób na przywrócenie samochodu do stanu sprzed kolizji. Nasz serwis blacharsko-lakierniczy wykonuje najwyższej jakości naprawy powypadkowe.
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  max-width: 800px;

  .title {
    text-align: center;
  }

  .separator {
    margin: 0 auto;
    margin-bottom: 3rem;
  }

  .single-service {
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 1rem;
  }

  .image {
    grid-column-start: 1;
    grid-column-end: 1;
  }

  .description {
    grid-column-start: 2;
    grid-column-end: 3;
    place-items: center;
    
    h3 {
      color: var(--clr-grey-1);
    }

    h3:hover {
color: var(--clr-primary-1);
    }
  }
`

export default Services
