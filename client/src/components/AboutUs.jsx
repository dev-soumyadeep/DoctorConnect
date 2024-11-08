import React from "react";
import image from './assets/AboutUs.jpg'
const AboutUs = ()=>{
    return(
        <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
          <h3>Empowering Health Through Connection and Care</h3>
            <p>
            At DoctorConnect, we believe that everyone deserves easy access to quality healthcare, no matter where they are. Our platform bridges the gap between patients and trusted medical professionals, making it easier to find and book appointments with top-rated doctors who are ready to provide the care you need.

            Whether you’re seeking expert advice, treatment for a medical condition, or just a routine check-up, DoctorConnect is here to ensure your health journey is smooth, convenient, and reliable. For doctors, our platform provides a space to connect with patients, share expertise, and grow their practice.

            Our Mission Our mission is simple: to make healthcare accessible and personalized. We’re committed to connecting patients and doctors with transparency, trust, and ease.
            </p>
          </div>
        </div>
      </section>
    )
}

export default AboutUs