import React from 'react';
import software from "../src/images/04-large.jpg";
import digital from "../src/images/05-large.jpg";
import marketing from "../src/images/06-large.jpg";
import android from "../src/images/07-large.jpg";
const Slider =() =>{
    return (
        <>
<div className=" container-fluid mt-5">
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={digital} className="carousel-img" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={android} className="carousel-img" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={marketing} className="carousel-img" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={software} className="carousel-img" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={digital} className="carousel-img" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={marketing} className="carousel-img" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={android} className="carousel-img" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
        </>
    );
};
export default Slider;