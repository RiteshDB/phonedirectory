import React, { Fragment, useState, useEffect } from "react";
import "./Header.css";


const Header = function (props) {

    const [location, setLocation] = useState({ city: "", region: "", country_name: "" })

    useEffect(() => {
        fetch('https://ipapi.co/json', { method: "GET" })
            .then(response => response.json())
            .then(data => setLocation({ city: data.city, region: data.region, country_name: data.country_name }))
    }, []);


    return (
        <Fragment>
            <div className="header" >
                {props.heading}
            </div>
            <div className="location-tag">
                <span>Hi User, you are in {location.city}, {location.region}, {location.country_name} </span>
            </div>
        </Fragment>
    );
}

export default Header;