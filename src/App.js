import React, { createContext, useEffect, useState, } from  "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router-dom";
import Temp from "./Temp";
const App =()=>{
  
  return (
    <>
    <Temp/>
  </>
  );
};
export default App;

