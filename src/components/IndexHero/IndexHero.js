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

    const [buttonUrl, setButtonUrl] = React.useState("https://brunelstudents.com/societies/tech/");
    const [buttonText, setButtonText] = React.useState("Join Us");
    const [heroTitle, setHeroTitle] = React.useState("The Tech Community & BCS Student Chapter @ Brunel University");
    const [heroBackground, setHeroBackground] = React.useState(DefaultHeroImg);
    const [showFeaturedIndicator, setShowFeaturedIndicator] = React.useState(false);
    const [darkenImage, setDarkenImage] = React.useState(false);
    
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [btnOverride, setBtnOverride] = React.useState(false);

    var postCount = 0;

    useEffect(() => {
        if (data.allWpPost.edges.length > 0) {
            // Every 5 seconds, change to a new post. Every few posts, revert to default.
            const interval = setInterval(() => {
                if(postCount > data.allWpPost.edges.length - 1){
                    console.log("resetting to default")
                    postCount = 0;
                    setButtonUrl("https://brunelstudents.com/societies/tech/");
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

                try{
                    const buttons = document.getElementsByClassName("selector");
                    for (let i = 0; i < buttons.length; i++) {
                        buttons[i].classList.remove("selected");
                    }
                    buttons[postCount].classList.add("selected");
                }catch(e){
                    console.log("An error occured while attempting to change slide indicator. Error: " + e);
                }
            }
            , 5000);

            if(btnOverride){
                interval.refresh(); // Resets the timer to prevent any conflicts
                setBtnOverride(false); // Turns off the override
            }


            return() => {
                // Clean up the interval when the component unmounts.
                clearInterval(interval);
            }
            
        }
    }
    , []);
    

    const changeSlide = (e) => {
        // Find btnindex
        const btnindex = e.target.getAttribute("btnindex");
        setBtnOverride(true);
        if(btnindex == 0){
            postCount = 0;
            setButtonUrl("");
            setButtonText("Join Us");
            setHeroTitle("The Tech Community & BCS Student Chapter @ Brunel University");
            setHeroBackground(DefaultHeroImg);
            setShowFeaturedIndicator(false);
            setDarkenImage(false);
        }else{
            const post = data.allWpPost.edges[btnindex-1];
            setButtonUrl(post.node.link);
            setButtonText("Read More");
            setHeroTitle(post.node.title);
            setHeroBackground(post.node.featuredImage.node.localFile.childImageSharp.fluid.originalImg);
            setShowFeaturedIndicator(true);
            setDarkenImage(true);

            postCount = btnindex -1;
        }

        // Add "selected" class to button
        const buttons = document.getElementsByClassName("selector");
        for(let i = 0; i < buttons.length; i++){
            buttons[i].classList.remove("selected");
        }
        e.target.classList.add("selected");
    }

    

    return(

        // If the default image is used, don't darken background image.

        <div className="heroContainer" style={{backgroundImage: `url(${heroBackground})`}}>

            <div className="heroContent">
                {/* If ShowFeaturedIndicator is true, display the featured indicator */}
                {showFeaturedIndicator &&
                    <h3 className="featuredPostIndicator">FEATURED</h3>
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

            <div className="featuredRollSelector">
                <div btnindex="0" key="0" onClick={changeSlide} className="selector selected"/>

                {/* For each post, display a button that will link to the post's slide on the carousel */}
                {data.allWpPost.edges.map((post, index) => {
                    return(
                        <div btnindex={index+1} key={index+1} onClick={changeSlide}className="selector"/>
                    )
                })}
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