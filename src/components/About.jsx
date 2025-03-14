// import React from "react";
import { motion } from "framer-motion";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const About = () => {
  return (
    <motion.div
   id="about"
      className="max-w-4xl mx-auto p-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>

      <div className="flex flex-col lg:flex-row gap-6 items-center">
        {/* Image Section */}
        <div className="mr-8 md:border-r-4 md:pr-8 border-gray-600">
        <motion.img
          src="https://i.ibb.co/fLWLn77/cfb1bb4b-2bf1-4f75-91d5-bee4757d0d51.jpg"
          alt="Profile Picture"
          className="w-full max-w-xs lg:w-96 rounded-xl shadow-lg object-cover border-r-8 border-b-8 border-blue-800"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        </div>

        {/* Text & Tabs Section */}
        <div className="w-full">
          <p className="text-gray-600 mb-4">
            From a young age, I was fascinated by the power of technology, but
            my path to becoming a<strong> full-stack web developer</strong> was
            anything but easy. Coming from a background of
            <strong> great struggle</strong>, I pushed through challenges to
            carve my space in the world of programming.
          </p>
          <p className="text-gray-600 mb-4">
            Currently, I am in my{" "}
            <strong>4th year of an honors management program</strong>, balancing
            my studies with my passion for web development. Every day, I strive
            to <strong>learn and earn</strong>, expanding my skills in frontend
            and backend technologies while building real-world projects.
          </p>

          {/* Tabs Section */}
          <Tabs>
            <TabList className="flex justify-center flex-wrap gap-2 border-b pb-2">
              <Tab className="px-4 py-2 cursor-pointer border rounded-lg focus:outline-none">
                Journey
              </Tab>
              <Tab className="px-4 py-2 cursor-pointer border rounded-lg focus:outline-none">
                Work
              </Tab>
              <Tab className="px-4 py-2 cursor-pointer border rounded-lg focus:outline-none">
                Hobbies
              </Tab>
            </TabList>

            <TabPanel>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="p-4"
              >
                <h3 className="text-xl font-semibold">
                  My Programming Journey
                </h3>
                <p className="text-gray-600 mt-2">
                  I started coding during my college days, fascinated by how
                  technology can shape experiences. Over the years, I
                  specialized in frontend and backend development, mastering
                  HTML, CSS, JavaScript, React, and Next.js.
                </p>
              </motion.div>
            </TabPanel>

            <TabPanel>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="p-4"
              >
                <h3 className="text-xl font-semibold">The Work I Enjoy</h3>
                <p className="text-gray-600 mt-2">
                  I love building intuitive and accessible UI/UX designs that
                  enhance user interaction. My expertise includes developing
                  responsive web applications and optimizing performance for
                  seamless user experiences.
                </p>
              </motion.div>
            </TabPanel>

            <TabPanel>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="p-4"
              >
                <h3 className="text-xl font-semibold">Beyond Coding</h3>
                <p className="text-gray-600 mt-2">
                  Outside of programming, I enjoy photography, hiking, and
                  playing guitar. Exploring new places and capturing moments
                  fuels my creativity. I
                  also love spending quality time with friends, sharing ideas.
                </p>
              </motion.div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
