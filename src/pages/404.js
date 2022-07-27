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
const NotFoundPage = () => {
  return (
    <main className="app">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page not Found</title>
        <link rel="canonical" href="https://bruneltech.net" />

        <meta name="description" content="TECHSOC DESCRIPTION HERE" />
        <meta name="theme-color" content="#0078d7" />
        </Helmet>

        <div className="bsod_container">
          <div className="bsod_content">
            <h1 className="sad">:(</h1>
            <p className="bsod_txt">Your PC ran into a problem and needs to restart. We're just collecting some error info, and then we'll restart for you.</p>
            <br></br>        
            <p className="bsod_txt">0% complete</p>

            <div className="funny_qr">
              <div className="qr_img">

              </div>

              <div clasName="errContxt">

              </div>
            </div>
          </div>
        </div>
        
    </main>
  )
}

export default NotFoundPage
