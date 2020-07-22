import React from "react"
import { Link } from "gatsby"
import "../styles/style.scss"

const Contact = () => {
  return (
    <div className="container">
      <div id="contact" className="contact">
        <div
          className="contacttitle"
          data-aos="zoom-in"
          data-aos-duration="600"
        >
          Get in <b>Touch</b>.
        </div>
        <div className="contactform" data-aos="zoom-in" data-aos-duration="600">
          <form name="contactnetlifyform" method="POST" data-netlify="true">
            <div className="names">
              <div className="firstname">
                <input type="text" name="firstname" placeholder="First Name*" />
              </div>
              <div className="lastname">
                <input type="text" name="lastname" placeholder="Last Name*" />
              </div>
            </div>
            <div className="formemail">
              <input type="text" name="email" placeholder="Email*"></input>
            </div>
            <div className="formnumber">
              <input type="number" name="number" placeholder="Number"></input>
            </div>
            <div className="formmessage">
              <textarea
                name="message"
                placeholder="What can we help you with?*"
              ></textarea>
            </div>
            <div className="submitbtn">
              <input type="submit"></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
