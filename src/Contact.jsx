import React, { useState }  from "react";
import "./index.css";

const Contact =()  =>{
    const InputEvent=(event)=>{
};
    return  (
        <>
        <div className="my-5">
         <h1 className="text-center">Contact Us☎️</h1>
        </div>
        <div className="container contact_div">
          <div className="row">
              <div className="col-md-6 col-10 mx-auto">
                  <form className="bg-light">
                  <div className="">
  <label for="exampleFormControlInput1" class="form-label font-weight-bold">Enter FirstName</label>
  <input 
  type="text" className="form-control" 
  id="exampleFormControlInput1"
   placeholder="abc" required/>
</div>
 <div class="">
  <label for="exampleFormControlInput1" class="form-label font-weight-bold">Enter LastName</label>
  <input 
  type="text" className="form-control" 
  id="exampleFormControlInput1"
   placeholder="abc" required/>
</div>
 <div class="">
  <label for="exampleFormControlInput1" class="form-label font-weight-bold">Phone</label>
  <input
   type="number" className="form-control"
    id="exampleFormControlInput1" 
    placeholder="03484398395" required/>
</div>
<div className="mb-0">
  <label for="exampleFormControlTextarea1" className="form-label font-weight-bold">Message</label>
  <textarea className="form-control"
   id="exampleFormControlTextarea1" 
   rows="3" required></textarea>
</div><br/>
<div class="col-12 text-center">
    <button class="btn btn-outline-primary" type="submit">Submit form 🌂</button>
  </div>
                  </form>
              </div>
          </div>
        </div>
        </>
    );
};
export default Contact;