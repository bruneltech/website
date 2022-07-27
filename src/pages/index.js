import * as React from "react"
import {StaticImage} from "gatsby-plugin-image";
import { Helmet } from "react-helmet";
import {motion} from "framer-motion";




// Import sass stylesheets
import "../css/index.scss"
import "./homePage.scss"

// Component Imports
import Menu from "../components/Menu";
import IndexHero from "../components/IndexHero/IndexHero";
import RecentPosts from "../components/RecentPosts/RecentPosts";
import FeaturedCategory from "../components/FeaturedCategory/FeaturedCategory";
import UpcomingEvents from "../components/UpcomingEvents/UpcomingEvents";
import Footer from "../components/Footer/Footer";

// markup
const IndexPage = () => {
  
  const variants = {
    open: {opacity: 1, y:0, x:0},
    closed: {opacity:0, y: 0, x: "5%"}
  }

  const heroVariants = {
    open: {opacity: 1, y:0, x:0},
    closed: {opacity:0, y: "10%", x: 0}
  }


  return (
    <main className="app">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Brunel Tech Society</title>
        <link rel="canonical" href="https://bruneltech.net" />

        <meta name="description" content="The Tech Community & BCS Student Chapter at Brunel University London" />
        <meta name="theme-color" content="#41268F" />
        </Helmet>
        
      <Menu/>

      <IndexHero/>

      {/* Upcoming Events would go here. Extension not fully ready yet. */}
      <UpcomingEvents/>


      {/* Recent Posts */}
      <RecentPosts/>

      <FeaturedCategory slug="society-news"/>


      {/* Footer */}
      <Footer/>
    </main>
  )
}

export default IndexPage
