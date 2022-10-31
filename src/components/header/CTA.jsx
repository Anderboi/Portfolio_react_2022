import React from 'react'
import CV from '../../assets/CV_Upolovnev_A.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">Download CV</a>
      <a href="#contact" className="btn btn-primary">Contacts</a>
    </div>
  )
}

export default CTA