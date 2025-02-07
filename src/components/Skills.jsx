import React from "react";
import { motion } from "framer-motion";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const skills = {
  Frontend: [
    { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  ],
  Backend: [
    { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Firebase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" },
  ],
  Tools: [
    { name: "VSCode", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Photoshop", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
  ],
};

const tabVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Skills = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto p-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-center mb-6">🛠 Tech Stack</h2>
      <Tabs>
        <TabList className="flex justify-center space-x-4 border-b pb-2">
          {Object.keys(skills).map((category, index) => (
            <Tab key={index} className="px-4 py-2 cursor-pointer border rounded-lg">{category}</Tab>
          ))}
        </TabList>

        {Object.entries(skills).map(([category, items], index) => (
          <TabPanel key={index}>
            <motion.div
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              className="p-4 text-center"
            >
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {items.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="flex flex-col items-center space-y-2"
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50, y: idx % 3 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <img src={skill.src} alt={skill.name} className="h-12 w-12" />
                    <p className="text-gray-700 text-sm font-medium">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabPanel>
        ))}
      </Tabs>
    </motion.div>
  );
};

export default Skills;
