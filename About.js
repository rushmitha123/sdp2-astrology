import React from "react"
import Back from "./Back"
import Heading from "./Heading"
import "./about.css"



const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='' title='About Us - Who We Are?'  />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' /><br/>
            <br/>
            </div>
            <p>Astrology is the study of the movements and relative positions of celestial objects, such as planets, stars, and the moon, and how they may influence human affairs and natural events on Earth. Astrology is often used to create horoscopes, which are personalized interpretations of an individual's birth chart based on the time, date, and location of their birth.

There are several different systems of astrology, including Western astrology, Vedic astrology, and Chinese astrology. Western astrology is the most commonly practiced form of astrology in the Western world and is based on the 12 zodiac signs, which are associated with different personality traits and characteristics.

Astrology has a long history, with roots in ancient civilizations such as Babylon, Greece, and Egypt. While some people believe in the accuracy and usefulness of astrology, others consider it to be a pseudoscience that lacks empirical evidence.

It is important to note that astrology should not be used as a substitute for professional advice or medical treatment. While astrology can provide insights into a person's personality and life circumstances, it is not a reliable method for predicting the future or making important decisions.</p>
          </div>
          
      </section>
    </>
  )
}

export default About