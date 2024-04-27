import React from "react"
import Back from "./Back"
import "./featured/Featured.css"
import FeaturedCard from "./featured/FeaturedCard"
import Card from "./Card"
import './card.css'


const Services = () => {
  return (
    <>
      <section className='services mb'>
        <div className='featured container'>
          <FeaturedCard />
        </div>
        <div className='Card'>
          <card 
          title='card Title'
          imageUrl='img'
          body='vhjeeeeeeeevefhdjjjjjjjjjjjjj'
          />
        </div>
      </section>
    </>
  )
}

export default Services
