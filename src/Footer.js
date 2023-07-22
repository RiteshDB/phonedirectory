import React, { useContext } from "react";
import { SubscriberCountContext } from "./SubscriberCountContext";

export default function Footer(){

    const count = useContext(SubscriberCountContext);
    console.log("In footer, count is ", count);
    return <h3> Number of Current Contacts: {count} </h3>
}