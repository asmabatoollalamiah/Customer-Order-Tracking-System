import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import HomeNav from './home_nav';



function Main() {
    return(
        <React.Fragment>
            <Header/>
            <HomeNav/>
            <div className="flex-horizontal">
            <Home/>
                {/* <Nav/> */}
            </div>
            <Footer/>
       </React.Fragment>
   )
}

export default Main;