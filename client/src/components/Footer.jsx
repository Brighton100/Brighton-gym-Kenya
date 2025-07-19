



import React from 'react';
import { sponsorImg1, sponsorImg2, sponsorImg3, sponsorImg4 } from "../images";

const Footer = () => {
  return (
    <footer className='bg-gray-900 pt-20 pb-10 text-white'>
      <div className="container mx-auto px-6">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16'>
          {/* Explore More Section */}
          <div className='flex flex-col gap-4'>
            <h2 className='text-2xl font-semibold'>Explore More</h2>
            <p className='text-gray-300 font-medium text-base'>
              Discover the best in fitness, wellness, and lifestyle content. Stay updated with the latest trends, offers, and more.
            </p>
          </div>

          {/* Newsletter Subscription */}
          <div className='flex flex-col gap-4'>
            <h2 className='text-2xl font-semibold'>Subscribe To Our Newsletter</h2>
            <input 
              type="email" 
              placeholder='Your email address' 
              className='px-4 py-3 text-gray-900 font-medium border-none outline-none rounded-md placeholder:text-gray-600 transition-all focus:ring-2 focus:ring-indigo-600' 
            />
            <button 
              type='submit' 
              className='px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md transition-all ease-in-out hover:bg-indigo-700 hover:scale-105'>
              Submit
            </button>
          </div>
   <div className="social-icons space-y-2 text-white">
  <h2 className="text-2xl font-semibold mb-2">Follow Us</h2>

  <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
    <i className="fa-brands fa-facebook mr-2"></i> Facebook
  </a>
  <br />

  <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
    <i className="fa-brands fa-twitter mr-2"></i> Twitter
  </a>
  <br />

  <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
    <i className="fa-brands fa-linkedin mr-2"></i> LinkedIn
  </a>
  <br />

  <a href="https://www.github.com/" target="_blank" rel="noreferrer">
    <i className="fa-brands fa-github mr-2"></i> GitHub
  </a>
  <br />

  <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">
    <i className="fa-brands fa-tiktok mr-2"></i> TikTok
  </a>
  <br />

  <a href="https://wa.me/254706238175" target="_blank" rel="noreferrer">
    <i className="fa-brands fa-whatsapp mr-2"></i> WhatsApp
  </a>
</div>


          {/* Sponsor Logos */}
          <div className='flex flex-col gap-4'>
            <h2 className='text-2xl font-semibold'>Our Sponsors</h2>
            <div className='flex flex-wrap gap-4'>
              <img src={sponsorImg1} alt="sponsor-img1" className='w-full max-w-[120px] object-contain' />
              <img src={sponsorImg2} alt="sponsor-img2" className='w-full max-w-[120px] object-contain' />
              <img src={sponsorImg3} alt="sponsor-img3" className='w-full max-w-[120px] object-contain' />
              <img src={sponsorImg4} alt="sponsor-img4" className='w-full max-w-[120px] object-contain' />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='border-t border-gray-700 mt-10 pt-6 text-center'>
          <p className='text-gray-400'>© 2025 Ochieng Brighton Okello. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
