import React from 'react'
import OtherHeaderSection from '../Components/OtherHeaderSection/OtherHeaderSection'

import heroImage from '../assets/heroImage.png'

const About = () => {
  return (
    <div>
      <OtherHeaderSection title="About" backgroundImage={heroImage} />
      <div className="container">
        <h2 className='text-center text-primary'>This Page is coming soon!</h2>
      </div>


    </div>
  )
}

export default About