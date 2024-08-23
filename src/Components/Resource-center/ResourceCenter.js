import React from 'react'
import '../Resource-center/ResourceCenter.css'
import Mentalhealth from "../Assets/mental health.jpg"
import mentalhealthhiv from '../Assets/mentalhealthhiv.jpg'
import children from '../Assets/children.jpg'

function ResourceCenter() {
  return (
    <div className='resource-center' id='resource-center'>
      <div className="title">
        <h1>Resource Center <hr /></h1>
        <p>Learn about everything from cutomer success stories,mental health,calm tunes and soo much more</p>
      </div>
      <div className="resourceCenter">
            <div className="card">
                <img src={Mentalhealth} alt="" />
                <div className="container-text">
                    <h4>MENTAL HEALTH</h4>
                    <p>Read about mental health according WHO ...</p>
                    <a href="https://www.medicalnewstoday.com/articles/154543"
                    target="_blank"
                     rel="noopener noreferrer"
                     style={{
                            display: 'inline-block',
                            padding: '20px 100px',
                            backgroundColor: 'white',
                            color: '#5598AF',
                            fontWeight: 'bolder',
                            textDecoration: 'none',
                            borderRadius: '5px'
                         }}>CHECKOUT</a>
                </div>
            </div>
            <div className="card">
                <img src={children} alt="" />
                <div className="container-text">
                    <h4>MENTAL HEALTH IN CHILDREN AND ADOLESCENTS</h4>
                    <p>Child and Adolescent mental health ...</p>
                    <a href="https://ijmhs.biomedcentral.com/articles/10.1186/s13033-024-00644-8"
                    target="_blank"
                     rel="noopener noreferrer"
                     style={{
                            display: 'inline-block',
                            padding: '20px 100px',
                            backgroundColor: 'white',
                            color: '#5598AF',
                            fontWeight: 'bolder',
                            textDecoration: 'none',
                            borderRadius: '5px'
                         }}>CHECKOUT</a>
                </div>
            </div>
            <div className="card">
                <img src={mentalhealthhiv} alt="" />
                <div className="container-text">
                    <h4>MENTAL HEALTH AND HIV</h4>
                    <p> Prevalence of common mental disorder...</p>
                    <a href="https://ijmhs.biomedcentral.com/articles/10.1186/s13033-024-00641-x"
                    target="_blank"
                     rel="noopener noreferrer"
                     style={{
                            display: 'inline-block',
                            padding: '20px 100px',
                            backgroundColor: 'white',
                            color: '#5598AF',
                            fontWeight: 'bolder',
                            textDecoration: 'none',
                            borderRadius: '5px'
                         }}>CHECKOUT</a>
                </div>
            </div>
            
        </div>    
     

    </div>
  )
}

export default ResourceCenter