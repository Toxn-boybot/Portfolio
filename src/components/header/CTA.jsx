import React from 'react'
import myCV from "../../assets/myCV.pdf"


function CTA() {
  return (
    <div className='cta'>
        <a href={myCV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA