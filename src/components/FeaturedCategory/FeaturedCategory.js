// FeaturedCategory.js

// When displayed on something like the homepage, it'll display the 4
// most recent posts made within said category, with an Arrow to link
// visitors to the category archive should they wish to view more of them.

import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { motion } from "framer-motion";

import {FaChevronRight} from 'react-icons/fa'

const FeaturedCategory = (props) => {
    const data = useStaticQuery(graphql`
        query {
            allWpPost(filter: {categories: {nodes: {elemMatch: {slug: {eq: "society-news"}}}}} limit: 4, sort: {fields: [dateGmt], order: DESC}) {
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
                }
            }

            allWpCategory(filter: {slug: {eq: "society-news"}}) {
                nodes {
                    name
                    slug
                    uri
                }
            }
        }
    `);
      

    return(
        <div className="recentPostsContainer">
            <div className="recentPostsContent">
                <div className="sectionMeta">
                    <div className="sectCont">
                        <h2 className="sectionTitle">Society News</h2>
                        <Link to={data.allWpCategory.nodes[0].uri} className="sectionLink"><FaChevronRight className="sectionicn"/></Link>
                    </div>
                    <div className="divider"/>
                </div>

                <div className="recentPostsItems">
                    {data.allWpPost.nodes.map((post, index) => {

                        return(
                            <div className="recentPostItem" key={index}>
                                <a href={post.uri}>
                                    <motion.div
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="recentPost"
                                    >
                                        <div className="recentPostImage">
                                            <img src={post.featuredImage.node.sourceUrl} alt={post.title}/>
                                        </div>

                                        <div className="colourstrip"/>

                                        <div className="recentPostMeta">
                                            <h4 className="recentPostCat">{post.categories.nodes[0].name}</h4>
                                            <h3 className="recentPostTitle">{post.title}</h3>
                                        </div>
                                    </motion.div>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>                
    )
}

export default FeaturedCategory;