import React from "react"
import { Link } from "gatsby"
import "../styles/style.scss"

const Header = () => {
  return (
    <div>
      <header data-aos="fade-down">
        <div className="inner-header">
          <div className="logo">
            <Link to="/#bannerid">
              <b>Blue Line</b> Capital
            </Link>
          </div>
          <div className="navigation">
            <nav>
              <Link to="/#aboutid">ABOUT</Link>
              <Link to="/#insights">INSIGHTS</Link>
              <Link to="/#contact">CONTACT</Link>
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
