"use client"
import React from 'react'
import Banner from '../Banner/Banner'
import ServiceArea from '../ServieArea/ServiceArea'
import Review from '../Review/Review'
import Services from '../Services/Services'
import Contact from "../Contact/Contact";

const Homes = () => {
    return (
        <>
            <Banner />
            <Services />
            <ServiceArea />
            <Review />
            <Contact/>
        </>
    )
}

export default Homes