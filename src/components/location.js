import React from "react"
import { Link } from "gatsby"
import "../styles/style.scss"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Particles from "react-particles-js"

const Location = () => {
  const data = useStaticQuery(graphql`
    query {
      ContactTrade: file(relativePath: { eq: "contactboardoftrade.jpg" }) {
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
      <div className="container">
        <div id="location" className="location">
          <div id="particles-js">
            <Particles
              params={{
                particles: {
                  number: {
                    value: 50,
                    density: {
                      enable: true,
                      value_area: 1000,
                    },
                  },
                },
              }}
            />
          </div>
          <div className="locationtitle" data-aos="zoom-in">
            Let's <b>meet</b>.
          </div>
          <div className="contactinfo">
            <div className="contactimg" data-aos="zoom-in">
              <Img fluid={data.ContactTrade.childImageSharp.fluid} />
            </div>
            <div className="contacttext" data-aos="zoom-in">
              We are located in the <b>Chicago Board of Trade.</b> <br></br>
              <br></br>
              Call: 312-837-3944
              <br></br>Email: info@bluelinecapllc.com
              <br></br>
              <br></br>
              <b>141 W. Jackson Blvd, Suite 2845, Chicago, IL 60604</b>
            </div>
          </div>
          <div className="footer">
            <p>
              Blue Line Capital LLC © All Rights Reserved, 2020<br></br>
              321-837-3944 | info@bluelinecapllc.com<br></br>
              Made with ❤ in Chicago
              <br></br>
              <br></br>
              141 W. Jackson Blvd, Suite 2845, Chicago, IL 60604
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location
