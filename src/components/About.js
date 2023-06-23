import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {/* {
                 resumeData.aboutme
               } */}
               Results-driven software developer with a broad scientific background and a proven track record of delivering
               tailored software solutions. Possesses a strong work ethic fostered through research and co-op experience,
               complemented by a socially-conscious approach to problem-solving that prioritizes the end user's needs. <br/> <br/>

               Currently seeking a full-time position to apply expertise and expand skill set, aiming to contribute to the success of an exceptional organization.<br/> <br/>

               When AFK, enjoys weightlifting, mixed-martial arts, music, movies and board games.
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}