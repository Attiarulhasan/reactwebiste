import React from "react";


const Pricecard = ()=>{
    return(
    <>
    <div className="container">
    <div className="my-5">
    <h1 className="text-center">Our Prices</h1>
    </div>
    <div className="columns">
  <ul className="price">
    <li className="header">Basic</li>
    <li className="grey">$ 9.99 / year</li>
    <li>10GB Storage</li>
    <li>10 Emails</li>
    <li>10 Domains</li>
    <li>1GB Bandwidth</li>
    <li className="grey"><a href="#" className="button btn-danger learn-more">Sign Up</a></li>
  </ul>
</div>
<div className="columns">
  <ul className="price">
    <li className="header" style={{'background-color':'#00000'}}>Pro</li>
    <li className="grey">$ 24.99 / year</li>
    <li>25GB Storage</li>
    <li>25 Emails</li>
    <li>25 Domains</li>
    <li>2GB Bandwidth</li>
    <li className="grey"><a href="#" className="button btn-danger learn-more">Sign Up</a></li>
  </ul>
</div>
<div className="columns">
  <ul className="price">
    <li className="header">Premium</li>
    <li className="grey">$ 49.99 / year</li>
    <li>50GB Storage</li>
    <li>50 Emails</li>
    <li>50 Domains</li>
    <li>5GB Bandwidth</li>
    <li className="grey"><a href="#" className="button btn-danger learn-more">Sign Up</a></li>
  </ul>
</div>
    </div>
    </>
    );
};
export default Pricecard;