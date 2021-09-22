import React  from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/vector-art-2.png";
const Common =(props)  =>{
    return  (
        <>
        <section id="header" className="">
        <div className="container-fluid nav_bg">
        <div className="row">
        <div className="col-10 mx-auto">
         <div className="row">
        <div className="col-md-6 col-10 mx-auto pt-5 pt-lg-0 order-2 order-lg-1">
        <h1>
        {props.name}
        <strong className="brand-name"> Busy Bee Tech</strong></h1>
        <h3 className="my-3">We are the teams of talented developers making websites</h3>
        <div className="mt-3">
          <NavLink to={props.visit} className="btn-get-started">
          {props.btname}
          </NavLink>
        </div>
        </div>
         <div className="col-md-6 col-10 order-1 mx-auto order-lg-2 header-img">
          <img src=   
          {props.imgsrc} className="img-fluid animated" alt=""/>
         </div>
         </div>
        </div>
        </div>
        </div>
        </section>
        </>
    );
};
export default Common;