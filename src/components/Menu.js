import * as React from 'react';
import {Link, useStaticQuery, graphql } from 'gatsby';
import {StaticImage} from "gatsby-plugin-image";
import {FaSearch, FaChevronRight, FaHamburger} from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi";


// Create a component called Menu with the results from the query.

/* GraphQL query to get wordpress menu named "nav" */

// SSR-Rendered element.

//dGVybTo3 -- Prod
//dGVybToxNg== -- Development

const Menu = ({ children }) => {
    const data = useStaticQuery(graphql`
        query {
            wpMenu(id: {eq: "dGVybToy"}) {
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

    const openDropdown = (e) => {
        const dropdown = e.target.nextSibling;

        e.target.classList.toggle("open");
        dropdown.classList.toggle("open");
    }

    const [mOpen, setMOpen] = React.useState(false);
    
    const openMobileMenu = () => {
        // Open mobile menu
        const mobileMenu = document.querySelector(".navElements_M_Content");
        const mainBar = document.querySelector(".menuContainer");

        mobileMenu.classList.toggle("m_open");
        mainBar.classList.toggle("m_open");

        setMOpen(!mOpen);
    }
    
    // track clicks
    const trackClick = (e) => {
        console.log("aaaa");
    }

    //const [isDropDownOpen, setIsDropDownOpen] = React.useState(false);

    const items = data.wpMenu.menuItems.nodes;
    
    const logoUrl = data.wp.siteLogo.sourceUrl;

    return(
        <div className="menuContainer">
            <div className="navContent">
                <div className="hackBrunelLogo">
                    <Link to="/">
                        {/*<StaticImage src="../images/sample-logo.webp" alt="HackBrunel" className="siteLogo"/>*/}
                        <img src={logoUrl} alt="HackBrunel" className="siteLogo"/>
                    </Link>
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


                    <FaSearch className="searchtoggle"/>
                </header>

                <header className="navElements_Mobile">
                    {/* Create list of links. If link has children, create a dropdown menu. */}
                    <GiHamburgerMenu onClick={openMobileMenu} className="mobileToggle"/>
                    
                    <div className="navElements_M_Content">
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
                    


                    <FaSearch className="searchtoggle"/>
                </header>

                {/* <main>
                    {children}
                </main> */}
            </div>
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