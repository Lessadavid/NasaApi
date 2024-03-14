import React from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import HomePage from "../pages/Homepage";
import AnyPhoto from "../pages/AnyPhoto";
import Searchpage from "../pages/Searchpage";
function Router(){

    return (
      <BrowserRouter>
        <div className="app">
            <Routes>
            <Route  path='/' exact element={<HomePage />}></Route>
            <Route  path='/Anyphoto' exact element={<AnyPhoto />}></Route>
            <Route  path='/Searchpage' exact element={<Searchpage />}></Route>
  

            </Routes>
        </div>
      </BrowserRouter>
    );
  };
  
  export default Router;