// import React, { useRef } from 'react'
// import '../Contact/Contact.css'
// import GitHubIcon from '@mui/icons-material/GitHub';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import EmailIcon from '@mui/icons-material/Email';
// import emailjs from '@emailjs/browser';


// function Contact() {
//     const form = useRef();
//     const sendEmail = (e) => {
//         e.preventDefault();
    
//         emailjs.sendForm('service_lmufbmi', 'template_22h7oko',form.current,'gVWkCvcyRwAX5CVLU')
//           .then((result) => {
//               console.log(result.text);
//               e.target.reset();
//               alert('Email Sent!');

//           }, (error) => {
//               console.log(error.text);
//           });
//       };

//   return (
//     <section className='contactForm1' id='contact'>
//         <div>
//             <div className="contactPageTitle"> Contact Me</div>
//             <span className="contactDesc"> Please fill out the form below to discuss any work opportunities</span>
//             <form ref={form} onSubmit={sendEmail} >
//         <form>
//                 <input type="text" className="name" placeholder='Your Name' name='your_name'/>
//                 <input type="email" className="email" placeholder='Your Email' name='your_email'/>
//                 <textarea  className='msg' name="message"  rows="5" placeholder='Your Message ...'></textarea>
//                 <button type='submit' value='Send' className="submitbtn" >Submit</button>
//             </form>
//                 <div className="links">
//                     <a>
//                     <a href="https://github.com/fridahnamudu?tab=repositories" target='blank' rel='noopener noreferrer'><GitHubIcon style={{ fontSize: '50px' }} /> </a>
//                     <a href="" ><TwitterIcon style={{ fontSize: '50px' }}/> </a>
//                     <a href="https://www.linkedin.com/in/fridah-joy-namudu-758a98207/" target='blank' rel='noopener noreferrer'><LinkedInIcon style={{ fontSize: '50px' }}/> </a>
//                     <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target='blank' rel='noopener noreferrer'><EmailIcon style={{ fontSize: '50px' }}/></a>
//                     </a>
//                 </div>
       
        

//     </div>

// </section>  )
// }
// export default Contact