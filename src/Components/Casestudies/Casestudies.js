import React from 'react'
import "../Casestudies/Casestudies.css"
import { Link } from 'react-scroll'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import DescriptionIcon from '@mui/icons-material/Description';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Article1 from "../Assets/Article1.jpg"
import Video1 from "../Assets/video1.jpg"
import WorkIcon from '@mui/icons-material/Work';
import adhd from '../Assets/adhd.jpg'
import autism from '../Assets/autism.jpg'
import ptsd from '../Assets/ptsd.jpg'
import anxiety  from '../Assets/anxiety.jpg'
import depression from "../Assets/mental health.jpg"



function Casestudies() {
  return (
    <div className='casestudies'>
        <div className="links">
            <div className="nav">
               <Link activeClass="active" to="/resources" className="casestudylink"> <FeaturedPlayListIcon /> Featured</Link>
               <Link activeClass="active" to="/patient" className="casestudylink"> <DescriptionIcon /> Articles</Link>
               <Link activeClass="active" to="/therapist" className="casestudylink"><OndemandVideoIcon /> Videos</Link>  
               <Link activeClass="active" to="/therapist" className="casestudylink"> <WorkIcon /> CaseStudies</Link>

        </div>
        </div>

  <div className="userstories">
        <div className="card">
            <div className="container">
            <AccountCircleIcon />
                <p>"I really enjoyed talking to the Chatbot and I found a therapist of my choice, She helped me plan out of my anxieties"</p>
                <p>~Anonymous</p>
               <ul>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarBorderIcon />

                    
                </ul>
            </div>
        </div>
        <div className="card">
            <div className="container">
            <AccountCircleIcon />
                <p>"Elysian Mind has significantly improved my patients' engagement in therapy. It's user-friendly interface and interactive features make it easy for them to track their progress and stay motivated."</p>
                <p>~Anonymous</p>
               <ul>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarBorderIcon />

                    
                </ul>
            </div>
        </div>
        <div className="card">
            <div className="container">
            <AccountCircleIcon />
                <p>"Elysian Mind has been a lifesaver for me. The AI chatbot is incredibly supportive and understanding. The recommendations have helped me identify areas where I need to focus on improving my mental health."</p>
                <p>~Anonymous</p>
               <ul>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarBorderIcon />

                    
                </ul>
            </div>
        </div>
    </div>

    <div className="articles">
        <h1>Articles</h1>
        <div className="article-content">
        <div className="card">
                <img src={Article1} alt="" />
                <div className="container-text">
                    <h4>MENTAL HEALTH</h4>
                    <p>Mental health is about how people think, feel ...</p>
                    <a href="https://www.medicalnewstoday.com/articles/154543"
                    target="_blank"
                     rel="noopener noreferrer"
                     style={{
                            display: 'inline-block',
                            padding: '10px 20px',
                            backgroundColor: ' #E6CB4F',
                            color: 'white',
                            fontWeight: 'bolder',
                            textDecoration: 'none',
                            borderRadius: '5px'
                         }}>READ</a>
                </div>
            </div>

            <div className="card">
                <img src={anxiety} alt="" />
                <div className="container-text">
                    <h4>ANXIETY</h4>
                    <p>Read about mental health according Anxiety ...</p>
                    <a href="https://magazine.medlineplus.gov/article/anxiety-what-you-need-to-know/"
                    target="_blank"
                     rel="noopener noreferrer"
                     style={{
                            display: 'inline-block',
                            padding: '10px 20px',
                            backgroundColor: ' #E6CB4F',
                            color: 'white',
                            fontWeight: 'bolder',
                            textDecoration: 'none',
                            borderRadius: '5px'
                         }}>READ</a>
                    
                    {/* <button> <a href="https://github.com/fridahnamudu?tab=repositories" target='blank' rel='noopener noreferrer'> */}
                    {/* </a>CHECKOUT</button> */}
                </div>
            </div>
            <div className="card">
                <img src={autism} alt="" />
                <div className="container-text">
                    <h4>AUTISM</h4>
                    <p>Read about mental health according WHO ...</p>
                    <a href="https://www.medicalnewstoday.com/articles/154543"
                    target="_blank"
                     rel="noopener noreferrer"
                     style={{
                            display: 'inline-block',
                            padding: '10px 20px',
                            backgroundColor: ' #E6CB4F',
                            color: 'white',
                            fontWeight: 'bolder',
                            textDecoration: 'none',
                            borderRadius: '5px'
                         }}>READ</a>
                </div>
            </div>
            <div className="card">
                <img src={ptsd} alt="" />
                <div className="container-text">
                    <h4>PTSD</h4>
                    <p>Read about mental health according WHO ...</p>
                    <a href="https://www.medicalnewstoday.com/articles/154543"
                    target="_blank"
                     rel="noopener noreferrer"
                     style={{
                            display: 'inline-block',
                            padding: '10px 20px',
                            backgroundColor: ' #E6CB4F',
                            color: 'white',
                            fontWeight: 'bolder',
                            textDecoration: 'none',
                            borderRadius: '5px'
                         }}>READ</a>
                </div>
            </div>
            <div className="card">
                <img src={adhd} alt="" />
                <div className="container-text">
                    <h4>ADHD</h4>
                    <p>Read about mental health according WHO ...</p>
                    <a href="https://www.medicalnewstoday.com/articles/154543"
                    target="_blank"
                     rel="noopener noreferrer"
                     style={{
                            display: 'inline-block',
                            padding: '10px 20px',
                            backgroundColor: ' #E6CB4F',
                            color: 'white',
                            fontWeight: 'bolder',
                            textDecoration: 'none',
                            borderRadius: '5px'
                         }}>READ</a>
                </div>
            </div>
            <div className="card">
                <img src={depression} alt="" />
                <div className="container-text">
                    <h4>DEPRESSION</h4>
                    <p>Read about mental health according WHO ...</p>
                    <a href="https://www.medicalnewstoday.com/articles/154543"
                    target="_blank"
                     rel="noopener noreferrer"
                     style={{
                            display: 'inline-block',
                            padding: '10px 20px',
                            backgroundColor: ' #E6CB4F',
                            color: 'white',
                            fontWeight: 'bolder',
                            textDecoration: 'none',
                            borderRadius: '5px'
                         }}>READ</a>
                </div>
            </div>
            <div className="card">
                <img src={Article1} alt="" />
                <div className="container-text">
                    <h4>MENTAL HEALTH</h4>
                    <p>Read about mental health according WHO ...</p>
                    <a href="https://www.medicalnewstoday.com/articles/154543"
                    target="_blank"
                     rel="noopener noreferrer"
                     style={{
                            display: 'inline-block',
                            padding: '10px 20px',
                            backgroundColor: ' #E6CB4F',
                            color: 'white',
                            fontWeight: 'bolder',
                            textDecoration: 'none',
                            borderRadius: '5px'
                         }}>READ</a>
                </div>
            </div>

        </div>


    
    </div>
    <div className="videos">
        <h1> Videos</h1>
        <div className="videos-details">
        <div className="card">
                <img src={Video1} alt="" />
                <div className="container-text">
                    <h4>MENTAL HEALTH</h4>
                    <p>Read about mental health according WHO ...</p>
                    <a href="https://www.medicalnewstoday.com/articles/154543"
                    target="_blank"
                     rel="noopener noreferrer"
                     style={{
                            display: 'inline-block',
                            padding: '20px 100px',
                            backgroundColor: '#df3c22',
                            color: 'black',
                            fontWeight: 'bolder',
                            textDecoration: 'none',
                            borderRadius: '5px'
                         }}>WATCH</a>
                </div>
            </div>
            <div className="card">
                <img src={Video1} alt="" />
                <div className="container-text">
                    <h4>MENTAL HEALTH</h4>
                    <p>Read about mental health according WHO ...</p>
                    <a href="https://www.medicalnewstoday.com/articles/154543"
                    target="_blank"
                     rel="noopener noreferrer"
                     style={{
                            display: 'inline-block',
                            padding: '20px 100px',
                            backgroundColor: '#df3c22',
                            color: 'black',
                            fontWeight: 'bolder',
                            textDecoration: 'none',
                            borderRadius: '5px'
                         }}>WATCH</a>
                </div>
            </div>
            <div className="card">
                <img src={Video1} alt="" />
                <div className="container-text">
                    <h4>MENTAL HEALTH</h4>
                    <p>Read about mental health according WHO ...</p>
                    <a href="https://www.medicalnewstoday.com/articles/154543"
                    target="_blank"
                     rel="noopener noreferrer"
                     style={{
                            display: 'inline-block',
                            padding: '20px 100px',
                            backgroundColor: '#df3c22',
                            color: 'black',
                            fontWeight: 'bolder',
                            textDecoration: 'none',
                            borderRadius: '5px'
                         }}>WATCH</a>
                </div>
            </div>
            <div className="card">
                <img src={Video1} alt="" />
                <div className="container-text">
                    <h4>MENTAL HEALTH</h4>
                    <p>Read about mental health according WHO ...</p>
                    <a href="https://www.medicalnewstoday.com/articles/154543"
                    target="_blank"
                     rel="noopener noreferrer"
                     style={{
                            display: 'inline-block',
                            padding: '20px 100px',
                            backgroundColor: '#df3c22',
                            color: 'black',
                            fontWeight: 'bolder',
                            textDecoration: 'none',
                            borderRadius: '5px'
                         }}>WATCH</a>
                </div>
            </div>
            </div>

    </div>

    </div>
  )
}

export default Casestudies