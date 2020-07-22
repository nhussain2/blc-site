import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Banner from "../components/banner"
import About from "../components/about"
import Contact from "../components/contact"
import Insights from "../components/insights"
import Location from "../components/location"
import "aos/dist/aos.css"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

class IndexPage extends React.Component {
  componentDidMount() {
    const AOS = require("aos")
    this.aos = AOS
    this.aos.init()
  }

  componentDidUpdate() {
    this.aos.refresh()
  }
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <About />
        <Contact />
        <Location />
      </div>
    )
  }
}

export default IndexPage
