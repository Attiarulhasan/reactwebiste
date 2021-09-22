
import react from "react"
import Sdata from "./Sdata";
import Card from "./Card";
import img1 from "../src/images/01.jpg";
import img2 from "../src/images/02.jpg";
import img3 from "../src/images/03.jpg";
import img4 from "../src/images/04.jpg";
import FacebookIcon from '../node_modules/@material-ui/icons/Facebook';
import InstagramIcon from '../node_modules/@material-ui/icons/Instagram';
import TwitterIcon from '../node_modules/@material-ui/icons/Twitter';
import GitHubIcon from '../node_modules/@material-ui/icons/GitHub';
import { NavLink } from "react-router-dom";

 const Team = () => {
  return (
    <div className="container-fluid">
    <div className="my-5">
    <h1 className="text-center">Our Team 🦸‍♀️</h1>
    </div>
    <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10  mx-auto">
                <div className="row gy-4 mx-auto text-center">
                 <>
                 <div className="col-lg-3 col-md-6 text-center">
                 <img src={img1} className="img-fluid" alt="..."/>
                 <h4 className="pt-3">Senior Web developer
                 <h5>John Doe</h5>
                 </h4>
                 <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
                  or randomised words which don't look even slightly believable.</p>
                  <FacebookIcon className="icons"/>
                  <InstagramIcon/>
                    <TwitterIcon/>
                    <GitHubIcon/>
                    <br/><br/>
                  <NavLink to="" className="btn btn-danger learn-more">Learn More </NavLink>
                 </div>
                 <div className=" col-lg-3 col-md-6 ">
                 <img src={img2} className="img-fluid" alt="..."/>
                 <h4 className="pt-3">Android developer <br/>
                 <span><h5>Harisson bacheria</h5></span>
                 </h4>
                 <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, 
                 or randomised words which don't look even slightly believable.</p>
                 <FacebookIcon className="icons"/>
                  <InstagramIcon/>
                    <TwitterIcon/>
                    <GitHubIcon/>
                    <br/><br/>
                 <NavLink to="" className="btn btn-danger learn-more">Learn More.. </NavLink>
                 </div>
                 <div className="col-lg-3 col-md-6">
                 <img src={img3} className="img-fluid" alt="..."/>
                 <h4 className="pt-3">Senior HR manager <br/>
                 <span><h5>Olivia Lawne</h5></span>
                 </h4>
                 <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, 
                 or randomised words which don't look even slightly believable.</p>
                 <FacebookIcon className="icons"/>
                  <InstagramIcon/>
                    <TwitterIcon/>
                    <GitHubIcon/>
                    <br/><br/>
                 <NavLink to="" className="btn btn-danger learn-more">Learn More.. </NavLink>
                 </div>
                 <div className="col-lg-3 col-md-6">
                 <img src={img4} className="img-fluid" alt="..."/>
                 <h4 className="pt-3">Project manager
                 <br/>
                 <span><h5>Daniel Oliver</h5></span>
                 </h4>
                 <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
                  or randomised words which don't look even slightly believable.</p>

                 <FacebookIcon/>
                  <InstagramIcon/>
                  <TwitterIcon/>
                  <GitHubIcon/>
                  <br/><br/>
                  <NavLink to="" className="btn btn-danger learn-more ">Learn More.. </NavLink>
                 </div>
                 </>
              </div>
              </div>
            </div>
            </div>
    </div>
  );
};
export default Team;
