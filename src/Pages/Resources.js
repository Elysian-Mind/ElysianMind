import React, { useEffect } from 'react'
import Casestudies from '../Components/Casestudies/Casestudies'
import ResourceCenter from '../Components/Resource-center/ResourceCenter';
import { scroller } from 'react-scroll';


const Resources = () => {
    useEffect(() => {
      scroller.scrollTo('resource', {
        duration: 500,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    }, []);
  
   
  return (
    <div className='resource' id='resource'>
        <div id="target-element-id">
            <ResourceCenter />
            <Casestudies />
        </div>
    </div>
  )
}

export default Resources