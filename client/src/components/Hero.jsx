import React from "react"
import image from "./assets/hero.jpeg"
import "../styles/hero.css"
import { useNavigate } from "react-router-dom"
const Hero=()=>{
    const navigate = useNavigate();
    return(
        <section className="hero">
      <div className="hero-content">
        <h1>
        Connect with Trusted Doctors <br />
        Anytime, Anywhere
        </h1>
        <p>
        Find and book appointments with top-rated doctors at your convenience. <br />
        Whether you need expert advice or quick treatment, we make healthcare accessible and reliable. <br />
        Are you a doctor? Join us to connect with patients looking for your expertise.
        </p>
        <button type="button" className="connect-btn" onClick={navigate("/doctors")}>Connect to a doctor</button>
      </div>
      
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
    </section>
    )

}

export default Hero