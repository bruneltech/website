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

        <meta name="description" content="TECHSOC DESCRIPTION HERE" />
        <meta name="theme-color" content="#41268F" />
        </Helmet>
        
      <Menu/>

      <IndexHero/>
      
      {/* Countdown until hacking begins */}
    </main>
  )
}

export default IndexPage
