import * as React from "react"
import {StaticImage} from "gatsby-plugin-image";
import { Helmet } from "react-helmet";
import {motion} from "framer-motion";
import {GatsbySeo} from "gatsby-plugin-next-seo";




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
import TheTeam from "../components/TheTeam/TheTeam";

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
      </Helmet>

      <GatsbySeo
        title="Brunel Tech Society"
        description="The Tech Community & BCS Student Chapter at Brunel University London"
        canonical="https://bruneltech.net"
        openGraph={{
          type: "website",
          locale: "en_GB",
          url: "https://bruneltech.net",
          title: "Brunel Tech Society",
          description: "The Tech Community & BCS Student Chapter at Brunel University London",
        }}
        twitter={{
          handle: "@bruneltech",
          cardType: "summary_large_image",
        }}

      />
        
      <Menu/>

      <IndexHero id="main"/>

      {/* Upcoming Events would go here. Extension not fully ready yet. */}
      <UpcomingEvents />


      {/* Recent Posts */}
      <RecentPosts/>

      <FeaturedCategory id="society-news-section" slug="society-news"/>

      <div className="committee-section">
        <div className="commiteeSectionContent">
          <div className="sectionMeta">
            <div className="sectCont">
              <h2 className="sectionTitle">The 22/23 Commitee</h2>
              {/* <Link to={data.allWpCategory.nodes[0].uri} className="sectionLink"><FaChevronRight className="sectionicn"/></Link> */}
            </div>
            <div className="divider" />
          </div>

          <p className="previousMembers"><a href="/previous-committees">View Previous Committees</a></p>


          <div className="commiteeMembers">
            <TheTeam/>
          </div>
        </div>
      </div>


      {/* Footer */}
      <Footer/>
    </main>
  )
}

export default IndexPage
