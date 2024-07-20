import React from 'react'
import '../../Components/Sdgs/Sdgs.css'
import sdg3 from '../Assets/sdg3.png'
import sdg8 from '../Assets/sdg8.png'

function Sdgs() {
  return (
    <div className='sdg' id='sdg'>
        {/* <h1>SGDS</h1>
        <p></p> */}
        <h1>KEY SDGs :</h1>
      
                <div className="card">
                <img src={sdg3} alt="" />
                    <div className="container">
                        <br/>
                        <p></p>
                    </div>
                </div>



                <div className="card">
                    <img src={sdg8} alt="" />
                    <div className="container">
                        <p></p>
                    </div>
                </div>


       

    </div>
  )
}

export default Sdgs