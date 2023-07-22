import React, { useContext, useState } from "react";
import { SubscriberCountContext } from "./SubscriberCountContext";

export default function Footer(){

   

    const count = useContext(SubscriberCountContext);
    return <h3> Number of Current Contacts: {count} </h3>
    
}