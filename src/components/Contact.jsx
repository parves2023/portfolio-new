import {  MessageCircle } from "lucide-react";
import { Facebook, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="Contact" className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        {/* Left Section with Map and Info */}
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Dhaka+(Parves%20Mosarof)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          ></iframe>
          <div className="container mx-auto w-[90%] py-6 relative">
            <div className="bg-white relative flex flex-wrap items-center justify-between py-6 px-6 rounded shadow-md">
              {/* Address Section */}
              <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">Dhaka, Bangladesh</p>
              </div>

              {/* Email and Phone */}
              <div className="w-full lg:w-1/3">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a
                  href="mailto:parvesmosarof2@gmail.com"
                  className="text-blue-500 leading-relaxed"
                >
                  parvesmosarof2@gmail.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">+880 1516 502364</p>
              </div>

              {/* Contact Links */}
            <div className="mt-6 lg:w-1/3 space-y-4 flex flex-col items-start">
             
              <div className="flex items-center space-x-3">
                <MessageCircle className="text-purple-500" />
                <a
                  href="https://wa.me/8801516502364"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-purple-500"
                >
                  WhatsApp: +880 1516 502364
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Facebook className="text-blue-700" />
                <a
                  href="https://www.facebook.com/profile.php?id=100055235052516"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-700"
                >
                  Facebook Profile
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="text-blue-500" />
                <a
                  href="https://www.linkedin.com/in/parves-mosarof-565b15273"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-500"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
            </div>

            
          </div>
        </div>
        {/* Right Section with Contact Form and Social Links */}
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Contact Me
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Feel free to reach out via the form or social links below.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              disabled
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              disabled
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              disabled
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button disabled className="text-white cursor-not-allowed disabled bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
