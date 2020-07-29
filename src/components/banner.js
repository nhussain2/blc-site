import React from "react"
import { Link } from "gatsby"
import "../styles/style.scss"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Particles from "react-particles-js"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      BoardofTrade: file(relativePath: { eq: "boardoftrade.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      BlueLine: file(relativePath: { eq: "blueline.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Chicago: file(relativePath: { eq: "chicagowater.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div>
      <div id="particles-js">
        <Particles
          params={{
            particles: {
              number: {
                value: 140,
                density: {
                  enable: true,
                  value_area: 1000,
                },
              },
            },
          }}
        />
      </div>
      <div className="container">
        <div id="bannerid" className="banner">
          <div className="images">
            <div className="img1" data-aos="fade-up">
              <Img fluid={data.BoardofTrade.childImageSharp.fluid} />
            </div>
            <div className="img2" data-aos="fade-up">
              <Img fluid={data.Chicago.childImageSharp.fluid} />
            </div>
            <div className="img3" data-aos="fade-up">
              <Img fluid={data.BlueLine.childImageSharp.fluid} />
            </div>
            <div className="title" data-aos="fade-down">
              <b>BLUE LINE</b> CAPITAL
            </div>
            <div className="descbox" data-aos="fade-left">
              Developing innovative strategies to{" "}
              <b>achieve your financial goals.</b>
              <div className="learnhow">
                <Link to="#aboutid">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
