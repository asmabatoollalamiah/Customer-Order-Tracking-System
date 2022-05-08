import React from "react";
import pic from '../images/welcome.jpg';


function Header() {
    return(
      <React.Fragment>
  <div>
      <div className="header-img">
            <img src={pic} alt="logo" />
          </div>
  </div>

      </React.Fragment>
      
    )
}

export default Header;