// pages/contact.tsx
'use client'
import React from 'react';
import Head from 'next/head';
import classes from './index.module.scss'
const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact us for any inquiries or support." />
      </Head>

      <div className={classes.contactContainer}>
        <h1>Contact Us</h1>
        
        <div className={classes.contactDetails}>
          <div className={classes.detailItem}>
            <h2>Address</h2>
            <p>123, ABC Street,<br />New Delhi,<br />India</p>
          </div>
          
          <div className={classes.detailItem}>
            <h2>Email</h2>
            <a href="mailto:support@company.com">support@company.com</a>
          </div>

          <div className={classes.detailItem}>
            <h2>Phone</h2>
            <a href="tel:+911234567890">+91 123 456 7890</a>
          </div>
        </div>

        <div className={classes.map}>
          <h2>Our Location</h2>
          {/* You can embed Google Maps here */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448181.04878555426!2d76.81307317071024!3d28.647279935195566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d030d2249d6cf%3A0x4c33b6f2a685e3f8!2sDelhi!5e0!3m2!1sen!2sin!4v1696846463179!5m2!1sen!2sin"
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
