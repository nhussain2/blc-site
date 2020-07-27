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
          <form name="contactnetlify" method="POST" data-netlify="true">
            <div className="names">
              <div className="firstname">
                <input
                  type="text"
                  name="firstnamenetlify"
                  placeholder="First Name*"
                />
              </div>
              <div className="lastname">
                <input
                  type="text"
                  name="lastnamenetlify"
                  placeholder="Last Name*"
                />
              </div>
            </div>
            <div className="formemail">
              <input
                type="text"
                name="emailnetlify"
                placeholder="Email*"
              ></input>
            </div>
            <div className="formnumber">
              <input
                type="text"
                name="numbernetlify"
                placeholder="Number"
              ></input>
            </div>
            <div className="formmessage">
              <textarea
                name="messagenetlify"
                placeholder="What can we help you with?*"
              ></textarea>
            </div>
            <div className="submitbtn">
              <button type="submit" name="submitnetlify">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
