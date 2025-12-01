import { faFacebook, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
<div>
            <footer className="footer sm:footer-horizontal bg-[#002855]  p-10 text-white">
                <div>
                    <h3 className='font-bold text-3xl lg:text-5xl' >PawsNest</h3>
                    <p className='text-[16px]   mt-3'>
                        PawsNest is your trusted place <br /> to discover, adopt, and care <br /> for pets with love and responsibility. <br /> At PawsNest, we believe <br /> every paw deserves a cozy home - <br /> so find your forever friend today.
                    </p>
                    <p className=' font-medium mt-5'>
                        Email: <a href="">hello@pawsnest.com</a> <br />
                        Call: <a href="">(+880) 1914463784</a>
                    </p>
                </div>


            <nav>
                    <h6 className="footer_title_heading">Get To Know Us</h6>
                    <a className='hover:text-green-400' href="">About Us</a>
                    <a className='hover:text-green-400' href="">Term & Policy</a>
                    <a className='hover:text-green-400' href="">Careers</a>
                    <a className='hover:text-green-400' href="">News & Blog</a>
                    <a className='hover:text-green-400' href="">Contact Us</a>
                    
            </nav>

            <nav>
                    <h6 className="footer_title_heading">Information</h6>
                    <a className='hover:text-green-400' href="">Help Center</a>
                    <a className='hover:text-green-400' href="">Feedback</a>
                    <a className='hover:text-green-400' href="">FAQs</a>
                    <a className='hover:text-green-400' href="">Home</a>
                    <a className='hover:text-green-400' href="">Payments</a>
            </nav>

            <nav>
                    <h6 className="footer_title_heading">Orders & Retruns</h6>
                    <a className='hover:text-green-400' href="">Track Order</a>
                    <a className='hover:text-green-400' href="">Delivery</a>
                    <a className='hover:text-green-400' href="">Services</a>
                    <a className='hover:text-green-400' href="">Returns</a>
                    <a className='hover:text-green-400' href="">Exchange</a>
            </nav>


            <nav>
                <h6 className="footer_title_heading">Social</h6>
                <div className="grid grid-flow-col gap-4">
                    <a className='text-4xl' href=""><FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon></a>
                    <a className='text-4xl hover:text-red-600' href=""><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></a>
                    <a className='text-4xl hover:text-blue-400' href=""><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
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