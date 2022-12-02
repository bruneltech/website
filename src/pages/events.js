import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { motion } from "framer-motion";

import { GatsbySeo } from "gatsby-plugin-next-seo";

import Menu from "../components/Menu";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet";

const Events = (props) => {
  const data = useStaticQuery(graphql`
    query{
      allWpEvent(sort: {fields: eventDateStart, order: DESC}) {
        nodes {
          title
          slug
          uri
          eventDateStart
          eventLocation
          featuredImage {
            node {
              sourceUrl
              status
            }
          }
        }
      }
      }
  `);

    return(
        <div className="app">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Events - Brunel Tech Society</title>
                <link rel="canonical" href="https://bruneltech.net" />
                <meta name="theme-color" content="#1750A7" />
            </Helmet>

            <Menu />
            <div className="eventPostsContainer">
                <div className="pageContentMeta">
                    <h2 className="pageTitle">Events</h2>
                </div>

                <div className="eventPostsContent">
                    <div className="eventPostsItems">
                        {data.allWpEvent.nodes.map((post, index) => {

                            return(
                                <div className="eventPostItem" key={index}>
                                <a href={post.uri}>
                                    <motion.div
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="eventPost"
                                    >
                                        {/*<div className="eventPostImage" style={{backgroundImage: `url(${post.featuredImage.node.sourceUrl})`}}/>*/}
                                        <div className="eventPostImage">
                                            <img src={post.featuredImage.node.sourceUrl} alt={post.title}/>
                                        </div>

                                        <div className="colourstrip"/>

                                        <div className="eventPostMeta">
                                            <h3 className="eventPostTitle">{post.title}</h3>
                                            <h3 className="postDate">{new Date(post.eventDateStart).toDateString()}</h3>
                                            <h3 className="postDate">{post.eventLocation}</h3>

                                        </div>
                                    </motion.div>
                                </a>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <Footer/>
        </div>               
    )
}

export default Events;
