import React from "react";
import CV_EN from "../../assets/CV_en_22.pdf";
import CV_RU from "../../assets/CV_ru_22.pdf";

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
