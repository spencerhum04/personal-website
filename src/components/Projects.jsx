import styles, { layout } from '../style';
import { projects } from '../constants';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, link, content }) => (
  <div className="flex flex-col items-center p-6 mb-6 mt-4 mr-5 bg-transparent border border-sky-400">
    <div className={`w-[800px] h-[140px]`}>
      <p className="text-white text-[20px]">{title}</p>
      <p className="text-white text-[15px] mt-4">{content}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 py-2 mt-4 text-sky-400 flex">Code</a>
    </div>
  </div>
)

const Projects = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`text-[25px] text-white ml-10`}>&lt;projects&gt;</h2>

        {/* Projects Cards */}
        <div className="flex flex-col ml-24 mt-1">
          {projects.map((project,index) => (
            <ProjectCard key={project.id} {...project} index={index} />
          ))}
        </div>

        <h2 className={`text-[25px] text-white ml-10`}>&lt;/projects&gt;</h2>

      </div>

    </section>
  )
}

export default Projects