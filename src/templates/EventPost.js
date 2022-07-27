import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { FaCalendar, FaLocationArrow } from "react-icons/fa";

// Generic Imports
import Menu from "../components/Menu";
import Footer from "../components/Footer/Footer";


const EventPostTemplate = ({data}) => {
    const evStart = data.wpEvent.eventDateStart;
    const evEnd = data.wpEvent.eventDateEnd;

    const addCalReminder = () => {

    }

    return(
        <div className="app">
            <Menu />
            <div className="postContainer">
                <div className="eventMeta">
                    <div className="eventImg" style={{backgroundImage: `url(${data.wpEvent.featuredImage.node.localFile.url}})`}}/>
                    <div className="eventMetaContent">
                        <h1 className="eventTitle">{data.wpEvent.title}</h1>
                        <div className="eventTimes">
                            <p className="eventDate">
                                <FaCalendar className="cal"/>
                                {/* If the two dates are the same, then just show the start date. */}
                                {evStart.substring(0, 10) === evEnd.substring(0, 10) ?
                                    `${new Date(evStart.substring(0, 10)).toLocaleDateString() + " " + evStart.substring(11, 16)}
                                    - ${evEnd.substring(11, 16)}`
                                    
                                :
                                    `${new Date(evStart.substring(0, 10)).toDateString() + " " + evStart.substring(11, 16)}
                                     - 
                                     ${new Date(evEnd.substring(0, 10)).toDateString() + " " + evEnd.substring(11, 16)}`
                                }
                            </p>

                            <p className="eventLocation">
                                <FaLocationArrow className="locarrow"/>
                                {data.wpEvent.eventLocation}
                            </p>

                            <div className="calReminder">
                                <div onClick={addCalReminder} className="addBtn">
                                    <a>
                                        <button className="addBtn button-blue">Add to Calendar</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="postContentContainer">
                    <div className="postContent">
                        <div className="postContentBody"
                            dangerouslySetInnerHTML={{__html: data.wpEvent.content}}
                        />
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
        
    )
}

export default EventPostTemplate;

export const query = graphql`
    query($id: String!) {
        wpEvent(id: {eq: $id}) {
            title
            eventDateStart
            eventDateEnd
            eventLocation

            content

            featuredImage {
                node {
                  localFile {
                    url
                  }
                }
            }
        }
    }
    `