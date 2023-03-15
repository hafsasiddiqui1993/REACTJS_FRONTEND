import React from 'react'
import Footer from '../components/layouts/Footer'
import { Cards } from '../components/ui/Cards'
import { Aside } from '../components/layouts/Aside'
import Slider from '../components/layouts/Slider'
// import NavFunc from '../components/layouts/Nav'
import TopCard from '../components/layouts/TopCard'
import { Helmet } from 'react-helmet'

function HomePage() {
  return (
    <div>
<Helmet>
  <title>Exercise Tracker</title>
  <meta name="description" content='Bootstrap, HTML 5 Layout Structure, CSS, React, Mongodb, Node & Express'>
  </meta>
</Helmet>


     
     {/* <NavFunc /> */}
     <TopCard />
     <Slider />
     <Cards />
     <Aside />
    <Footer />
    </div>
  )
}

export default HomePage
