import React from 'react';
import "../Styles/Footer.css";
import {faFacebook, faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <h4>About Us</h4>
            <p>Discover the best deals on fruits and vegetables at our online store.
                <br/>
            Enjoy the convenience of browsing through our extensive catalogue at any time, day or night. With just a few clicks, you can add your desired items to your virtual shopping cart and proceed to checkout.
            </p>
          </div>
          <div className="footer__section_cont">
            <h4 style={{fontWeight: "bold"}}>Contact Us</h4>
            <p>Phone: 123-456-7890</p>
            <p>Email: info@example.com</p>
          </div>
          <div className="footer__section" style={{textAlign: "center"}}>
            <h4>Follow Us</h4>
            <div className="footer__social-icons">
              {/* <a href="#"><i className="fab fa-facebook"></i></a> */}
              <FontAwesomeIcon className='ficon' icon={faFacebook}/>
              {/* <a href="#"><i className="fab fa-twitter"></i></a> */}
              <FontAwesomeIcon className='licon' icon={faLinkedin}/>
              {/* <a href="#"><i className="fab fa-instagram"></i></a> */}
              <FontAwesomeIcon className='gicon' icon={faGithub}/>
              <FontAwesomeIcon className='ticon' icon={faTwitter}/>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; 2023 Your Ecommerce Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
