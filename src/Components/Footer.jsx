import { faFacebook, faLinkedin, faWhatsapp, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
<div>
            <footer className="footer sm:footer-horizontal bg-[#106372]  p-10 text-white">
                <div>
                    <h3 className='font-bold text-3xl lg:text-5xl' >PawsNest</h3>
                    <p className='text-[16px]   mt-3'>
                        PawsNest is your trusted place <br /> to discover, adopt, and care <br /> for pets with love and responsibility. <br /> At PawsNest, we believe <br /> every paw deserves a cozy home - <br /> so find your forever friend today.
                    </p>
                    <p className='font-medium mt-5'>
                        Email: {" "}
                        <a className="hover:text-green-400" href="mailto: nureanha99@gmail.com">nureanha99@gmail.com</a> <br />
                        Call: {" "} 
                        <a className="hover:text-green-400" href="tel:+8801836349141">(+880) 1836349141</a>
                    </p>
                </div>


            <nav>
                    <h6 className="footer_title_heading">Get To Know Us</h6>
                    <Link className='hover:text-green-400' to='/about'>About Us</Link>
                    <Link to="/termspolicy" className="hover:text-green-400">Terms & Policy</Link>
                    <Link to="/contactus" className="hover:text-green-400">Contact Us</Link>
                    
            </nav>

            <nav>
                    <h6 className="footer_title_heading">Information</h6>
                    <Link to="/testimonials" className="hover:text-green-400">Feedback</Link>
                    <Link to="/faq" className="hover:text-green-400">FAQs</Link>
                    <Link to="/" className="hover:text-green-400">Home</Link>
            </nav>

            <nav>
                    <h6 className="footer_title_heading">Orders & Retruns</h6>
                    <Link to="/myorders" className="hover:text-green-400">Track Order</Link>
                    <Link to="/services" className="hover:text-green-400">Services</Link>
                    <Link to="/returns" className="hover:text-green-400">Returns</Link>
            </nav>


            <nav>
                <h6 className="footer_title_heading">Social</h6>
                <div className="grid grid-flow-col gap-4">
                    <a className='text-4xl' href="https://www.linkedin.com/in/nure-anha-41892a1b8/" target='blank'><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
                    <a className='text-4xl' href="https://wa.me/8801836349141" target='blank'><FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon></a>
                    <a className='text-4xl' href="https://www.facebook.com/handi.ercel.77/" target='blank'><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
                </div>
            </nav>
    </footer>

    <footer className="footer sm:footer-horizontal footer-center p-4 bg-[#0c3f75] text-white">
    <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by PerLovers Industries Ltd.</p>
    </aside>
    </footer>
</div>
    );
};

export default Footer;