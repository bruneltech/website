import * as React from 'react';
import { useEffect } from 'react';
import {Link, useStaticQuery, graphql } from 'gatsby';
import { motion } from 'framer-motion';

// This will display the main banner, as well as any sticky posts
// in a carousel like fashion.

import DefaultHeroImg from '../../images/hero-front.png';


const IndexHero = () => {

    const data = useStaticQuery(graphql`
        query {
            allWpPost(filter: {isSticky: {eq: true}}) {
                edges {
                  node {
                    id
                    title
                    excerpt
                    link
                    featuredImage {
                      node {
                        localFile {
                          childImageSharp {
                            fluid(maxWidth: 1920, quality: 100) {
                              originalImg
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
        }
    `);

    const [buttonUrl, setButtonUrl] = React.useState("");
    const [buttonText, setButtonText] = React.useState("Join Us");
    const [heroTitle, setHeroTitle] = React.useState("The Tech Community & BCS Student Chapter @ Brunel University");
    const [heroBackground, setHeroBackground] = React.useState(DefaultHeroImg);
    const [showFeaturedIndicator, setShowFeaturedIndicator] = React.useState(false);
    const [darkenImage, setDarkenImage] = React.useState(false);

    var postCount = 0;

    useEffect(() => {
        if (data.allWpPost.edges.length > 0) {
            // Every 5 seconds, change to a new post. Every few posts, revert to default.
            const interval = setInterval(() => {
                if(postCount > data.allWpPost.edges.length - 1){
                    console.log("resetting to default")
                    postCount = 0;
                    setButtonUrl("");
                    setButtonText("Join Us");
                    setHeroTitle("The Tech Community & BCS Student Chapter @ Brunel University");
                    setHeroBackground(DefaultHeroImg);
                    setShowFeaturedIndicator(false);
                    setDarkenImage(false);
                }else{
                    console.log("choosing a post");
                    const post = data.allWpPost.edges[Math.floor(Math.random() * data.allWpPost.edges.length)];
                    setButtonUrl(post.node.link);
                    setButtonText("Read More");
                    setHeroTitle(post.node.title);
                    setHeroBackground(post.node.featuredImage.node.localFile.childImageSharp.fluid.originalImg);
                    setShowFeaturedIndicator(true);
                    setDarkenImage(true);

                    postCount++;    
                }
            }
            , 5000);
        }
    }
    , []);
    

    return(

        // If the default image is used, don't darken background image.

        <div className="heroContainer" style={{backgroundImage: `url(${heroBackground})`}}>

            <div className="heroContent">
                {/* If ShowFeaturedIndicator is true, display the featured indicator */}
                {showFeaturedIndicator &&
                    <h3 className="featuredPostIndicator">FEATURED POST</h3>
                }

                <motion.h1 className="heroTitle" initial={{opacity: 0}} animate={{opacity: 1}}>
                    <span>{heroTitle}</span>
                </motion.h1>

                <motion.div className="heroButton" initial={{opacity: 0}} animate={{opacity: 1}}>
                    <a href={buttonUrl}>
                        <button className="heroButton button-blue">{buttonText}</button>
                    </a>
                </motion.div>
            </div>

                {/* <h1>{heroTitle}</h1>
                <a className="btnLnk" href={buttonUrl}>
                    <div className="button-blue actionBtn">
                        <p className="buttonTxt">{buttonText}</p>
                    </div>
                </a>
            </div> */}
        </div>
    )
}

export default IndexHero;