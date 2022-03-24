import React from "react";


export default function Contact({name,jambe}) {
  // console.log(props);    

    return (
      <>
        <div className="contact-card">
          <img src="./images/mr-whiskerson.png" />
          <h3>
            <b>{name}</b>
          </h3>
          <div className="info-group">
            <img src="./images/phone-icon.png" />
            <p>(212) 555-1234</p>
          </div>
          <div className="info-group">
            <img src="./images/mail-icon.png" />
            <p>{jambe}</p>
          </div>
        </div>
      </>
    );
    
}