// aos
import React, { useEffect } from 'react';
import { Heading, FaqComponent } from ".";
import AOS from 'aos';
import 'aos/dist/aos.css';

const FAQ = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 100,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <section className='pt-10 relative'>
      <Heading name="Frequently Asked Questions" />

      <div className="container mx-auto py-10 px-6">
        <div className="flex flex-col">
          <div data-aos="fade-up">
            <FaqComponent
              question="How do I sign up and log in?"
              answer="To sign up, click on the 'Sign Up' button on the top right, fill in your details, and submit the form. Once registered, use your email and password to log in anytime."
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <FaqComponent
              question="What are the fees for the plans?"
              answer="We offer multiple plans depending on the duration and services. You can check our 'Pricing' section for detailed information about each plan."
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <FaqComponent
              question="Are the fees refundable?"
              answer="Fees are generally non-refundable. However, under certain circumstances such as technical issues or duplicate payments, refunds may be considered. Please contact support."
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <FaqComponent
              question="Is it safe to purchase your packages?"
              answer="Absolutely. All payments are processed through secure, encrypted gateways. Your data and payment information are always protected."
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <FaqComponent
              question="How long does it take to complete a training pack?"
              answer="Each training pack varies. On average, a full pack may take between 4 to 8 weeks depending on your fitness level and commitment."
            />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-blue-800 to-amber-300 opacity-80 pointer-events-none z-[-1]"></div>
    </section>
  );
};

export default FAQ;
