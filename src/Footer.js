import React from "react";
import "./Footer.css";
import { BrowserRouter, Routes, Route, NavLink, useRoutes, Link, useLocation } from "react-router-dom";
import StickyBox from "react-sticky-box"
import Contact from "./Contact.js"



const Footer = () => {
  
  return (
    <footer className="footer">
      <p>Copyright 2023 Xircls</p>
      <p>Mobile no: 9876543120</p>
      <div className="linkcolor">
        <p><a href="xircls.com">Xircls.com</a></p>
      </div>

      <div className="goto">
        {/* <a href ="./Contact.js" target="_blank">CONTACT US </a> */}
        
        <BrowserRouter>
        
        <Routes>
          <Route path="/Contact" element={<Contact />} />
         
         

        </Routes>
        
      </BrowserRouter>
      </div>
    </footer>
  );
};

export default Footer;









// import React from "react";
// import "./Footer.css";
// import StickyBox from "react-sticky-box";
// import { NavLink } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <p>Copyright 2023 Xircls</p>
//       <p>Mobile no: 9876543120</p>
//       <p><a href="xircls.com">xircls.com</a></p>
//       {/* <div id="gotoTop" class="icon-angle-up rounded-circle" style="display: none;"></div>

//       <a href="/contactus/" class="v-relp-btn v-relp-text-color-white" style="position: fixed; bottom: 20px; right: 0; z-index: 999;">
//         Contact Us
//       </a> */}

//       <div className="goto"> <NavLink to = "./Contact.js"> Contact Us</NavLink></div>

//     </footer>
//   );
// };

// export default Footer;
