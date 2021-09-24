import React  from "react";
import web from "../src/images/vector-art-2.png";
import Common from "./Common";
import Services from "./Services";
import Contact from "./Contact";
import Slider from "./Slider";
import Team from "./Team";
import Pricecard from "./Pricecard";

const Home =()  =>{
    return  (
        <> 
       <Common
           name="Grow your Business with" 
        imgsrc={web} visit="/Services"
         btname="Get Started"/>
         <Slider/>
         <Services/>
         <Team/>
         <Pricecard/>
         <Contact/>
        </>
    );
};
export default Home;