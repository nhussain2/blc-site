import React from "react"
import { Link } from "gatsby"
import "../styles/style.scss"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Particles from "react-particles-js"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      Skyline: file(relativePath: { eq: "skyline.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Bill: file(relativePath: { eq: "bill.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="about">
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
      <div id="aboutid" class="aboutbg">
        <Img fluid={data.Skyline.childImageSharp.fluid} />
      </div>

      <div className="inner-container">
        <div
          className="chicagotitle"
          data-aos="fade-right"
          data-aos-duration="600"
        >
          Located in the heart of <b>Chicago.</b>
        </div>
        <div
          className="chicagodesc"
          data-aos="fade-right"
          data-aos-duration="600"
        >
          One of the world's largest commodity and derivative hubs, we find our
          extensive commodity and macroeconomic background a value added
          advantage.
        </div>
        <div className="intro" data-aos="fade-right" data-aos-duration="600">
          Blue Line Capital LLC is an <b>investment advisor</b> working closely
          with high-net-worth clients to achieve their goals and plan their
          financial future.
        </div>
        <div
          className="billintro"
          data-aos="fade-right"
          data-aos-duration="600"
        >
          <div className="billpic">
            <Img fluid={data.Bill.childImageSharp.fluid} />
          </div>
          <div className="billtext">
            The President and Founder, <b>Bill Baruch</b>, has extensive
            experience in the financial industry as an advisor, trader and
            manager. With a major focus on futures and commodities early in his
            career, Bill’s macro experience provides an advantage in this
            ever-developing global world. ​
          </div>
        </div>
        <div className="whatruns">
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
          <div
            className="whatrunstitle"
            data-aos="zoom-in"
            data-aos-duration="600"
          >
            What runs <b>Blue Line Capital</b>?
          </div>
          <div className="whatruns1" data-aos="zoom-in" data-aos-duration="600">
            Active management + well-balanced institutional style portfolio.
          </div>
          <div className="whatruns2" data-aos="zoom-in" data-aos-duration="600">
            Alpha seeked strategically through long/short equities, options,
            commodities, fixed-income and alternative investments.
          </div>
          <div className="whatruns3" data-aos="zoom-in" data-aos-duration="600">
            Incomparable customer service. Focused on you.
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
