import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import {FaLinkedin} from 'react-icons/fa';


const Individual = (props) => {
    return (
        <div className="person">
            <div className="person-image-cont">
                <img src={props.image} alt={props.name} className="person-image" />
            </div>
            <div className="person-info">
                <h3 className="person-name">{props.name}</h3>
                <h4 className="person-role">{props.role}</h4>
                {/* If LIURL is not empty, then render the linkedin icon */}
                {props.LIURL !== "" ? <a href={props.LIURL} target="_blank" rel="noopener noreferrer"><FaLinkedin className="person-linkedin" /></a> : null}
            </div>
        </div>
    )
}

export default Individual;