import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { motion } from "framer-motion";

import { GatsbySeo } from "gatsby-plugin-next-seo";

import Menu from "../components/Menu";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet";

const ArchivePosts = ({data}) => {
    return(
        <div className="app">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{`${data.allWpCategory.nodes[0].name}`} - Brunel Tech Society</title>
                <link rel="canonical" href="https://bruneltech.net" />
                <meta name="theme-color" content="#1750A7" />
            </Helmet>

            <Menu />
            <div className="archivePostsContainer">
                <div className="pageContentMeta">
                    <h2 className="pageTitle">Category - {data.allWpCategory.nodes[0].name}</h2>
                </div>

                <div className="archivePostsContent">
                    <div className="archivePostsItems">
                        {data.allWpPost.nodes.map((post, index) => {

                            return(
                                <div className="archivePostItem" key={index}>
                                <a href={post.uri}>
                                    <motion.div
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="archivePost"
                                    >
                                        {/*<div className="archivePostImage" style={{backgroundImage: `url(${post.featuredImage.node.sourceUrl})`}}/>*/}
                                        <div className="archivePostImage">
                                            <img src={post.featuredImage.node.sourceUrl} alt={post.title}/>
                                        </div>

                                        <div className="colourstrip"/>

                                        <div className="archivePostMeta">
                                            <h4 className="archivePostCat">{post.categories.nodes[0].name}</h4>
                                            <h3 className="postDate">{new Date(post.dateGmt).toDateString()}</h3>
                                            <h3 className="archivePostTitle">{post.title}</h3>
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

export default ArchivePosts;

export const query = graphql`
query($id: String!) {
    allWpPost(
        filter: {categories: {nodes: {elemMatch: {id: {eq: $id}}}}}
      ) {
        nodes {
          title
          uri
          categories {
            nodes {
              name
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
          dateGmt
        }
      }

      allWpCategory(filter: {id: {eq: $id}}) {
        nodes {
          id
          name
        }
      }
}
`;