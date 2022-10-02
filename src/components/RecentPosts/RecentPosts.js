import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { motion } from "framer-motion";

import DefaultFeaturedImg from "../../images/hero-front.png";

const RecentPosts = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allWpPost(limit: 4, sort: {fields: [dateGmt], order: DESC}) {
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
        }
    `);
      

    return(
        <div className="recentPostsContainer" id="recent-posts-section">
            <div className="recentPostsContent">
                <div className="sectionMeta">
                    <div className="sectCont">
                        <h2 className="sectionTitle">Recent Posts</h2>
                        {/* <Link to={data.allWpCategory.nodes[0].uri} className="sectionLink"><FaChevronRight className="sectionicn"/></Link> */}
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
                                        {/*<div className="recentPostImage" style={{backgroundImage: `url(${post.featuredImage.node.sourceUrl})`}}/>*/}
                                        <div className="recentPostImage">
                                            {/* IF featuredImage is null, then use the default image */}
                                            {post.featuredImage == null ? <img src={DefaultFeaturedImg} alt="Brunel Tech Society Logo"/> : <img src={post.featuredImage.node.sourceUrl} alt={post.title}/>}
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

export default RecentPosts;