import React, { useState } from "react";

const About = () => {


  return (
  
      <div className="dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen p-8">
        <div className="container mx-auto">

          {/* About Section */}
          <section className="mb-12">
            <h1 className="text-3xl font-bold mb-4">About Cleanify</h1>
            <p className="text-lg leading-relaxed">
              At <strong>Cleanify</strong>, we believe in the power of a clean
              home. As a leading provider of professional house cleaning
              services, we are committed to delivering spotless results with a
              focus on quality, reliability, and customer satisfaction. Our expert
              team uses eco-friendly products and modern cleaning techniques to
              ensure your home is not only clean but also safe and healthy.
            </p>
          </section>

          {/* Our Mission Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              Our mission is simple: to provide reliable, top-quality cleaning
              services that make your home shine. We aim to create cleaner,
              healthier environments for our clients, offering a stress-free
              experience through our professional and efficient cleaning services.
            </p>
          </section>

          {/* Why Choose Us Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
            <ul className="list-disc pl-5 text-lg">
              <li><strong>Expert Team:</strong> Our team consists of highly trained and experienced cleaning professionals.</li>
              <li><strong>Eco-Friendly Products:</strong> We use environmentally friendly cleaning products that are safe for your family, pets, and the planet.</li>
              <li><strong>Tailored Services:</strong> Whether it's a one-time deep clean or regular maintenance, we offer customized cleaning solutions to meet your specific needs.</li>
              <li><strong>Reliable & Trustworthy:</strong> We understand the importance of trust when allowing others into your home. Our team is vetted, insured, and committed to providing dependable service every time.</li>
            </ul>
          </section>

          {/* Our Values Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc pl-5 text-lg">
              <li><strong>Integrity:</strong> We stand by our promises and always aim to exceed our clients' expectations.</li>
              <li><strong>Quality:</strong> Our attention to detail ensures that every corner of your home is cleaned to perfection.</li>
              <li><strong>Customer Satisfaction:</strong> We believe in building lasting relationships with our clients by consistently providing top-notch service.</li>
            </ul>
          </section>
        </div>
      </div>
   
  );
};

export default About;
