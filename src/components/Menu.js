import * as React from 'react';
import {Link, useStaticQuery, graphql } from 'gatsby';
import {StaticImage} from "gatsby-plugin-image";
import {FaSearch, FaChevronRight, FaHamburger} from "react-icons/fa";
import {GiHamburgerMenu, GiTripleYin} from "react-icons/gi";
import {AiOutlineClose} from "react-icons/ai";
import {motion} from "framer-motion";

import Desktop from "./SearchInterfaces/Desktop";


// Typesense server will still query pages and posts despite search currently not being implemented.
// Saves time for when it does get implemented later down the line. (Search, especially styling it is hard ok)

//dGVybToyNw== -- Prod
//dGVybToxNTk= -- Development

const Menu = ({ children }) => {
    const data = useStaticQuery(graphql`
        query {
            wpMenu(id: {eq: "dGVybToyNw=="}) {
                menuItems {
                    nodes {
                      label
                      url
                      id
                      parentId
                      childItems {
                        nodes {
                          id
                          url
                          label
                        }
                      }
                    }
                  }
            }

            wp{
                siteLogo{
                    sourceUrl
                }
            }
        }
    `);

    const items = data.wpMenu.menuItems.nodes;
    const logoUrl = data.wp.siteLogo.sourceUrl;

    const openDropdown = (e) => {
        const dropdown = e.target.nextSibling;

        if(dropdown == null || e.target == null){
            return;
        }else{
            e.target.classList.toggle("open");
            dropdown.classList.toggle("open");
        }

        return;
    }

    const [mOpen, setMOpen] = React.useState(false);
    
    const openMobileMenu = () => {
        // Open mobile menu
        const mobileMenu = document.querySelector(".navElements_M_Content");
        const mainBar = document.querySelector(".menuContainer");
        const navContainer = document.querySelector(".navContent");

        mobileMenu.classList.toggle("m_open");
        mainBar.classList.toggle("m_open");
        navContainer.classList.toggle("m_open");

        setMOpen(!mOpen);

        return;
    }

    const enableSearchKinda = () => {
        const search = document.querySelector(".searchFieldContainer");
        const cancelBtn = document.querySelector(".cancelSearch");
        const navContainer = document.querySelector(".navContent");


        // If the classes are already there, ignore it.
        if (search.classList.contains("selected")) {
            return;
        }else{
            search.classList.add("selected");
            cancelBtn.classList.add("selected");
            navContainer.classList.add("selected");
        }

        return;
    }

    const retractSearch = () => {
        //console.log("removing search");

        const search = document.querySelector(".searchFieldContainer");
        const cancelBtn = document.querySelector(".cancelSearch");
        const navContainer = document.querySelector(".navContent");


        search.classList.remove("selected");
        cancelBtn.classList.remove("selected");
        navContainer.classList.remove("selected");

        return;
    }

    //const [isDropDownOpen, setIsDropDownOpen] = React.useState(false);

    const openDesktopSearch = () => {

    }

    React.useEffect(() => {
        // If the screen width is more than 800px, remove the mobile menu.
       
        const updateWindowDimensions = () => {
            const newWidth = window.innerWidth;
            const mobileMenu = document.querySelector(".navElements_M_Content");
            const mainBar = document.querySelector(".menuContainer");
            const navContainer = document.querySelector(".navContent");

            if(newWidth > 800){
                mobileMenu.classList.remove("m_open");
                mainBar.classList.remove("m_open");
                navContainer.classList.remove("m_open");
                setMOpen(false);
            }
        };

        window.addEventListener('resize', updateWindowDimensions);
    }, []);

    const wrapperRef = React.useRef(null);
    //useOutsideAlerter(wrapperRef);

    return(
        <div className="menuContainer">
            <div className="navContent">
                <div className="hackBrunelLogo">
                    <a href="/">
                        {/*<StaticImage src="../images/sample-logo.webp" alt="HackBrunel" className="siteLogo"/>*/}
                        <img src={logoUrl} alt="HackBrunel" className="siteLogo"/>
                    </a>
                </div>
                
                <header className="navElements">
                    {/* Create list of links. If link has children, create a dropdown menu. */}
                    {items.map(item => {
                        if(item.childItems.nodes.length > 0){
                            return(
                                <div className="dropdown" onClick={openDropdown} key={item.id}>
                                    <button className="dropbtn">{item.label}</button>
                                    <div className="dropdown-content">
                                        {item.childItems.nodes.map(child => {
                                            return(
                                                <a className="dropdown-element" href={child.url} key={child.id}>
                                                    {child.label}
                                                    <FaChevronRight className="chevron"/>
                                                </a>
                                            )
                                        }
                                        )}
                                    </div>
                                </div>
                            )
                        }
                        else{
                            if(item.parentId == null){
                                return(
                                    <a className="navElement" href={item.url} key={item.id}>{item.label}</a>
                                )
                            }
                        }
                    }
                    )}


                    {/*
                    Doing search later when i can be bothered it's too much effort rn

                    <FaSearch onClick={openDesktopSearch} className="searchtoggle"/>
                    */}
                </header>

                {/*<header ref={wrapperRef} className="navElements_Mobile">*/}
                <header className="navElements_Mobile">
                    {/* Create list of links. If link has children, create a dropdown menu. */}
                    <div className="menuoptions">
                        {mOpen ? <AiOutlineClose className="mobileToggle" onClick={openMobileMenu}/> : <GiHamburgerMenu className="mobileToggle" onClick={openMobileMenu}/>}
                    </div>

                    <div className="navElements_M_Content">
                        
                        {/* Search is for later when I can get round to implementing properly. */}
                        {/* <div className="searchFieldContainer">
                            <Desktop/>
                            
                            <p onClick={retractSearch} className="cancelSearch">Cancel</p>
                            
                        </div> */}

                        {items.map(item => {
                            if(item.childItems.nodes.length > 0){
                                return(
                                    <div className="dropdown" onClick={openDropdown} key={item.id}>
                                        <button className="dropbtn">{item.label}</button>
                                        <div className="dropdown-content">
                                            {item.childItems.nodes.map(child => {
                                                return(
                                                    <a className="dropdown-element" href={child.url} key={child.id}>
                                                        {child.label}
                                                        <FaChevronRight className="chevron"/>
                                                    </a>
                                                )
                                            }
                                            )}
                                        </div>
                                    </div>
                                )
                            }
                            else{
                                if(item.parentId == null){
                                    return(
                                        <a className="navElement" href={item.url} key={item.id}>{item.label}</a>
                                    )
                                }
                            }
                        }
                        )}
                    </div>
                    
                </header>

                {/* <main>
                    {children}
                </main> */}
            </div>

            {/*
            Doing search later when i can be bothered it's too much effort rn

            <div className="desktopSearch">
                <motion.div className="searchFieldContainer" initial={{x: "-100%"}} animate={{x: 0}}>
                    <div className="searchField">
                        <FaSearch className='icon'/>
                        <form action="/search" method="get" className="searchform">
                            <input type="text" name="q" className="search-input" placeholder="Search Brunel Tech Society"/>
                        </form>
                    </div>
                    <AiOutlineClose className="clicon"/>
                </motion.div>

                <div className="darkenPage open"/>
            </div>*/}
        </div>
    )
}

export default Menu;



// export const query = graphql`
//     query {
//         wpMenu(id: {eq: "dGVybToxNg=="}) {
//             menuItems {
//                 nodes {
//                     label
//                     url
//                 }
//             }
//         }
//     }
// `

// export default Menu;