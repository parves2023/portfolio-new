import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { Download, Linkedin, Facebook, Github } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Website Developer", "Frontend Web Developer", "Creating Digital Experiences", "Awesome UI/UX"],
    loop: 0,
    typeSpeed: 50,
    deleteSpeed: 30,
  });

  return (
    <div className="flex container mx-auto overflow-hidden py-10 flex-col-reverse lg:flex-row justify-evenly items-center  my-28 bg-white text-gray-900 px-6 lg:px-20">
      {/* Text Section */}
      <div className="text-center lg:text-left max-w-lg">
        <h1 className="text-4xl font-bold mt-2">
          Hello, I'm <br /> <span className="text-blue-500 text-6xl">Parves Mosarof</span>
        </h1>

        <p className="text-4xl text-gray-600 mt-4 ">
          <span className="text-blue-500 font-semibold">{text}</span>
          <span className="blinking-cursor border-r-4 text-black border-blue-700"></span>
        </p>

        <p className="text-gray-700 mt-4">
          I excel at crafting elegant digital experiences and am proficient in
          various programming languages and technologies.
        </p>

        <div className="flex items-center gap-4 mt-8 justify-center lg:justify-start">
          <motion.a
            href="#"
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-400 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5" />
            Download CV
          </motion.a>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/parves-mosarof-565b15273/"
              target="_blank"
              aria-label="LinkedIn"
              className="text-gray-600 hover:text-blue-500"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/parves2023"
              target="_blank"
              aria-label="GitHub"
              className="text-gray-600 hover:text-blue-500"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100055235052516"
              target="_blank"
              aria-label="Facebook"
              className="text-gray-600 hover:text-blue-500"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

 
     {/* Image Section */}
     <motion.div
        className="relative w-80 h-80"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Rotating Border */}
        <motion.div
          className="absolute flex items-center justify-center inset-0 rounded-full border-b-[1rem] border-t-[1rem] p-[9.3rem] border-blue-700 animate-spin-slow"
          style={{
            animation: "spin 8s linear infinite",
          }}
        >


        </motion.div>
        <motion.img
          src="https://i.ibb.co/WBhyn7r/185206b4-6d98-4dad-bfce-e2390a05ad8a.jpg"
          alt="Parves Mosarof Portrait"
          className="w-full h-full object-cover rounded-full    shadow-lg relative z-10"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
