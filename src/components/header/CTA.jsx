import React from "react";
import CV_EN from "../../assets/CV - EN.pdf";
import CV_RU from "../../assets/CV - RU.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV_EN} download className="btn">
        CV_EN
      </a>
      <a href={CV_RU} download className="btn">
        CV_RU
      </a>
      <a href="#contacts" className="btn btn-primary">
        Contacts
      </a>
    </div>
  );
};

export default CTA;
