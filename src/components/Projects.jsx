import styles, { layout } from '../style';
import { useState } from 'react'
import { projects } from '../constants';
import { downarrowicon } from '../assets';

const ProjectCard = ({ title, link, content }) => (
  <div className="flex flex-col items-center p-6 mt-8 mr-5 bg-transparent border border-sky-400 transition ease-in-out hover:bg-cyan-800 duration-1000 transform hover:translate-x-4">
    <div className={`w-[800px] h-[140px]`}>
      <p className="text-white text-[20px]">{title}</p>
      <p className="text-white text-[15px] mt-4">{content}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 py-2 mt-4 text-sky-400 flex">Code</a>
    </div>
  </div>
)

const Projects = () => {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle((prev) => !prev);
  };

  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <div className="flex justify-center items-center">
          <img src={downarrowicon} className={`w-5 h-3 flex transform transition ease-in-out duration-500 cursor-pointer ${toggle ? '': '-rotate-90'}`} onClick={handleClick} />
          <h2 className={`text-[25px] text-white ml-6 flex`}>&lt;projects&gt;</h2>
        </div>

        {/* Toggle to load projects */}
        <div className={`flex flex-col ml-20 mt-6 transform transition ease-in-out duration-1000 ${toggle ? 'opacity-100' : 'opacity-0'}`}>
          {toggle && (
            projects.map((project, index) => (
              <ProjectCard key={project.id} {...project} index={index} />
            ))
          )}
        </div>

      </div>
    </section>
  )
}

export default Projects