import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";


function Main() {
    return(
        <React.Fragment>
            <Header/>
            <div className="flex-horizontal">
            <Home/>
                {/* <Nav/> */}
            </div>
            <Footer/>
       </React.Fragment>
   )
}

export default Main;