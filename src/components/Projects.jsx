import styles, { layout } from '../style';
import React, { useState } from 'react';
import { projects } from '../constants';
import { downarrowicon, close } from '../assets';

const ProjectCard = ({ title, link, content, modaltitle, modaldesc, modalimg }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [description, setDesc] = useState('');

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleCreate = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div
        className="flex flex-col items-center p-6 mt-8 mr-5 bg-transparent border border-purple-300 transition ease-in-out hover:bg-purple-800 duration-1000 transform"
        onClick={openModal}
        style={{ cursor: 'pointer' }}
      >
        <div className={`w-[800px] h-[140px]`}>
          <p className="text-white text-[20px]">{title}</p>
          <p className="text-white text-[15px] mt-4">{content}</p>
          <p className="text-purple-300 text-[15px] mt-4">Click for details</p>
        </div>
      </div>

      {modalOpen && (
        <div className="overflow-y-auto overflow-x-hidden fixed z-50 flex justify-center items-start w-full top-0 h-screen">
          <div className="relative p-4 w-full max-w-2xl">
            {/* Modal content goes here */}
            <div className="relative bg-purple-900 rounded-lg shadow border border-purple-500">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                <h3 className="text-xl font-semibold text-white ml-2">{modaltitle}</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 bg-transparent ms-auto inline-flex justify-center items-center"
                >
                  <img src={close} alt="menu" className="w-[20px] h-[20px] object-contain cursor-pointer" />
                </button>
              </div>
              <div className="p-4 md:p-5">
                <img src={modalimg} className="border rounded-lg mb-4 w-[600px] h-[370px]" />
                <div className="text-white ml-2">{modaldesc}</div>
              </div>
              <div className="flex items-center p-4 md:p-5 border-t">
                <a href={link} target="_blank" rel="noopener noreferrer" className="ml-2 font-semibold hover:text-white text-white flex">Repository</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Projects = () => {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle((prev) => !prev);
  };

  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <div className="flex justify-center items-center">
          <img
            src={downarrowicon}
            className={`w-5 h-3 flex transform transition ease-in-out duration-300 cursor-pointer ${toggle ? '' : '-rotate-90'}`}
            onClick={handleClick}
          />
          <h2 className={`text-[25px] text-purple-300 ml-6 flex`}>&lt;projects&gt;</h2>
        </div>

        {/* Toggle to load projects */}
        <div className={`flex flex-col ml-20 mt-6 transform transition ease-in-out duration-1000 ${toggle ? 'opacity-100' : 'opacity-0'}`}>
          {toggle && projects.map((project, index) => <ProjectCard key={project.id} {...project} index={index} />)}
        </div>
      </div>
    </section>
  );
};

export default Projects;
