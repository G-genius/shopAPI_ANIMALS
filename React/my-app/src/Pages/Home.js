import React, { createElement, useEffect, useState } from "react";
import Advantages from "../Components/Advantages";
import Catalog from '../Components/Catalog';
import Consultation from "../Components/Consultation"
import Feedback from "../Components/Feed";
import Map from "../Components/Map";
import Slider from "../Components/Slider";
function Home() {
    return (
        <div>
            <Slider />
            <Catalog />
            <Consultation />
            <Advantages />
            <Feedback />
            <Map/>
        </div>
        )
}
export default Home;