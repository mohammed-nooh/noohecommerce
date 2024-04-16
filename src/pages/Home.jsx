import React from 'react'
import NavBar from '../components/NavBar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Product from '../components/Product'

const Home = () => {
  return (
    <div>
    <Announcement/>
    <NavBar/>
    <Slider/>
    <Categories/>
    <Product/>
    </div>
  )
}

export default Home