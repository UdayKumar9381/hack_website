import React from 'react';
import './Hacktrack.css';

const Hacktrack = () => {
  return (
    <div className="hacktrack-container">
      <div className="left-image">
        <img src="https://img.freepik.com/free-vector/young-man-working-laptop-computer-cartoon-vector_24797-2211.jpg?size=626&ext=jpg&uid=R157958380&ga=GA1.1.967409858.1722327485&semt=ais_hybrid-rr-similar" alt="Coding Sketch" />
      </div>

      <div className="content">
        <div className="logos">
          <img src="https://cdn.dribbble.com/users/6501075/screenshots/19994346/media/1ac3a7f59b24698b9c32f1025074abd1.gif" alt="Logo 1" className="logo" />
          <img src="https://cdn.dribbble.com/users/30388/screenshots/2922677/uptocode-animation-loop-dribbble.gif" alt="Logo 2" className="logo" />
          <img src="https://scontent.fvtz3-2.fna.fbcdn.net/v/t39.30808-1/326357284_3121857521422675_7025263856423593255_n.png?stp=dst-png_s200x200&_nc_cat=104&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=UlvIES4o8v8Q7kNvgG8uWFV&_nc_ht=scontent.fvtz3-2.fna&_nc_gid=ABej30Kj8W9_KXixki3h3GZ&oh=00_AYCGA7_WoPg3Kii7GSm5GIqAd7Ohve6DUtWLD_-fAA1ndw&oe=670DB6DA" alt="Logo 3" className="logo" />
        </div>

        <h1 className="hackathon-title">Hacktrack 2024</h1>
        <h2 className="hackathon-description">Expression of Blockchain</h2>
        <p className="description">
          Join us in exploring innovative solutions using blockchain technology.
        </p>

        <div className="rectangle-frame">
          <img src="https://cdn.dribbble.com/users/331157/screenshots/2571326/media/7a4b1d490642bf2f041286f3d3869d46.gif" alt="Deadline" className="calendar-image" />
          <p>
            <h2>Deadline</h2>
            <p>--------------------------------------------------------</p>
            <br />
            <strong>October 10, 2024</strong>
            <p className="quote">Scan here to submit your interest</p>
          </p>
          <img src="https://cdn.dribbble.com/users/1042765/screenshots/3636083/qr-code_animated.gif" alt="QR Code" className="qr-image" />
        </div>

        
        <h2><p className="hashtag">#HACKTRACK2024</p></h2>
        <div className="button-container">
          <button className="register-button">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Hacktrack;
