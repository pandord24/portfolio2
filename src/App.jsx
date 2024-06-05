import React, { useState } from "react";
import Footer from "./components/footer";
import {Outlet} from "react-router-dom";
import Nav from "./components/nav";




function App() {
  return <div className="app">
   <Nav/>
   <main>
<Outlet/>
   </main>
   <Footer/>
  </div>
}

export default App;