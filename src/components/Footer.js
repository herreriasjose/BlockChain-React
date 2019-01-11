import React from "react";

import "./Footer.css";
import "../bootstrap/css/bootstrap.css";

const Footer = props => (
  <div className="col-md-12">
    <div className="row">
      <div className="col-1 col-sm-1 col-md-1 col-lg-4 col-xl-4" />
      <div className="col-10 col-sm-10 col-md-10 col-lg-4 col-xl-4 col-centered">
        <a href="https://github.com/herreriasjose?tab=repositories">
          <button className="btn">
            <i className="fa fa-github" /> Check my other projects!
          </button>
        </a>
      </div>
      <div className="col-1 col-sm-1 col-md-1 col-lg-4 col-xl-4" />
    </div>
  </div>
);

export default Footer;
