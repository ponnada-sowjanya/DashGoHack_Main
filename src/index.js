import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client"; 
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Home from "./HomePage/Home";
import PlacementResources from "./MyPlacement/PlacementResources.js";
import MyTraining from "./MyTraining/MyTraining.js";
import CloudComp from "./MyWorkshop/CloudComputing.js";
import MyhackathonSelectionProcess from "./MyHackathon/MyhackathonSelectionProcess";
import SelectionProcess from "./Components/SelectionProcess.js";
import PlacementSupport from "./MyPlacement/PlacementSupport";
import MyWorkshop from "./MyWorkshop/MyWorkshop.js";
import Navbar from "./Components/Navbar";
import MyWebinar from "./MyWebinar/MyWebinar.js";
import Research from "./MyResearch/Research.js";
import CloudComputing from "./MyWorkshop/CloudComputing.js"
import Dashboard from "./Components/Dashboard.js";
import Cyber from "./MyHackathon/Cyber.js";
import Myworkshop from "./Myworkshop.js";
import TrainingPage from "./Components/TrainingPage.js";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Navbar/>
    
     <Router> 
      <Dashboard/>
          <Routes>  
          <Route path="/" element={<Cyber/>}/>    
          <Route path='/MyWebinar' element={<MyWebinar/>}/>       
          <Route path='/MyTraining' element={<MyTraining/>}/>       
          <Route path='/PlacementResources' element={<PlacementResources/>}/>       
          <Route path='/MyhackathonSelectionProcess' element={<MyhackathonSelectionProcess/>}/>       
          <Route path='/MyWorkshop' element={<MyWorkshop/>}/>       
          <Route path='/Research' element={<Research/>}/>       
        
          <Route path='/PlacementSupport' element={<PlacementSupport/>}/>       
          <Route path='/SelectionProcess' element={<SelectionProcess/>}/>       

        </Routes>
      </Router> 
  </React.StrictMode>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();