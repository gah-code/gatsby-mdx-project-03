import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Hero = ({ showPerson }) => {
  return (
    <header className="hero">
      <h2>test</h2>
      <h3>test sub</h3>

      {showPerson && (
        <StaticImage
          src="../images/person.png"
          placeholder="blurred"
          className="hero-person"
          alt="person typing"
        />
      )}
    </header>
  )
}

export default Hero
