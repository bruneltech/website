import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { FaCalendar, FaLocationArrow } from "react-icons/fa";

// Generic Imports
import Menu from "../components/Menu";
import Footer from "../components/Footer/Footer";


const EventPostTemplate = ({data}) => {
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
                                {new Date(data.wpEvent.eventDateStart).toDateString()}
                            </p>

                            <p className="eventLocation">
                                <FaLocationArrow className="locarrow"/>
                                {data.wpEvent.eventLocation}
                            </p>
                            <div className="times">
                                <p className="eventTime">{data.wpEvent.eventDateStartTime}</p>
                                <span>-</span>
                                <p className="eventEndTime">{data.wpEvent.eventDateEndTime}</p>
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
            eventDateStartTime
            eventDateEndTime
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