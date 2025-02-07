import React, { useState } from 'react';

const projects = [
  {
    name: 'Cloud Products Platform',
    image: 'https://i.ibb.co.com/9kZ2DDRN/producthunt.png',
    stack: ['React', 'Node.js', 'MongoDB'],
    description: 'An innovative platform where users can discover and share their favorite tech products.',
    liveLink: 'https://cloudproducts.netlify.app',
    githubLink: 'https://github.com/yourgithub/cloud-products-frontend',
    challenges: 'Ensuring smooth API integration and managing large datasets efficiently.',
    improvements: 'Enhancing user experience and adding AI-based recommendations.'
  },
  {
    name: 'VisaPilot',
    image: 'https://i.ibb.co.com/LhpSBM6k/visapilot.png',
    stack: ['Next.js', 'Express.js', 'PostgreSQL'],
    description: 'A solution for seamless visa applications and affordable flight bookings.',
    liveLink: 'https://visapilot.netlify.app',
    githubLink: 'https://github.com/yourgithub/visa-pilot-frontend',
    challenges: 'Keeping visa information updated and optimizing search functionality.',
    improvements: 'Adding real-time visa tracking and AI-based travel assistance.'
  },
  {
    name: 'Lingo Bingo',
    image: 'https://i.ibb.co.com/wN6WQ3Xy/lingobingo.png',
    stack: ['Vue.js', 'Firebase'],
    description: 'A fun vocabulary learning application helping users improve communication skills.',
    liveLink: 'https://lingobingoo.netlify.app/',
    githubLink: 'https://github.com/yourgithub/lingo-bingo-frontend',
    challenges: 'Ensuring engaging gamification features and handling real-time updates.',
    improvements: 'Adding more language options and personalized learning paths.'
  },
  {
    name: 'Residence Hotel Booking',
    image: 'https://i.ibb.co.com/5X1KDthN/residensial-hotel.png',
    stack: ['React', 'Vite', 'CSS'],
    description: 'A modern and user-friendly hotel booking platform.',
    liveLink: 'https://recidencehotel.netlify.app/',
    githubLink: 'https://github.com/yourgithub/residence-hotel-frontend',
    challenges: 'Implementing a seamless booking experience and responsive design.',
    improvements: 'Integrating payment gateway and adding user reviews.'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="projects-section p-5">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
      {projects.map((project, index) => (
  <div key={index} className="card flex flex-col lg:flex-row bg-base-100 shadow-xl w-full max-w-2xl mx-auto">
    <figure className="w-full h-60 max-w-72 lg:w-2/5">
      <img src={project.image} alt={project.name} className="w-full h-full object-cover rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none" />
    </figure>
    <div className="card-body flex-1 p-4">
      <h2 className="card-title text-lg md:text-xl">{project.name}</h2>
      <p className="text-sm md:text-base">{project.description}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary" onClick={() => setSelectedProject(project)}>View More / Details</button>
      </div>
    </div>
  </div>
))}


      </div>


      {selectedProject && (
  <div className="modal-overlay z-50 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={() => setSelectedProject(null)}>
    <div className="modal-content my-10 h-[95vh] bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-4xl mx-auto overflow-y-auto" onClick={(e) => e.stopPropagation()}>
      <h2 className="text-xl font-bold mb-2">{selectedProject.name}</h2>
      <img src={selectedProject.image} alt={selectedProject.name} className="w-full h-96 object-cover mb-4" />
      <p><strong>Tech Stack:</strong> {selectedProject.stack.join(', ')}</p>
      <p>{selectedProject.description}</p>
      <p><strong>Challenges:</strong> {selectedProject.challenges}</p>
      <p><strong>Potential Improvements:</strong> {selectedProject.improvements}</p>
      <div className="flex justify-between mt-4">
        <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 btn">Live Project</a>
        <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 btn">GitHub Repository</a>
      </div>
      <button className="btn btn-secondary mt-4 w-full" onClick={() => setSelectedProject(null)}>Close</button>
    </div>
  </div>
)}



    </div>
  );
};

export default Projects;
