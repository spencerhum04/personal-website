import { languages, tools } from '../constants';
import styles, { layout } from '../style';

const LanguageCard = ({ icon, title }) => (
  <div className="flex flex-col items-center p-6 rounded-[20px] mb-6 mt-4 mr-5 border-[1px] border-sky-400 bg-transparent hover:scale-110 hover:bg-cyan-800 duration-500">
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-white`}>
      <img src={icon} className="w-[50%] h-[50%] object-contain" />
    </div>
    <div>
      <h4 className="font-poppins font-semibold text-white text-[18px]">
        {title}
      </h4>
    </div>
  </div>
)

const ToolCard = ({ icon, title }) => (
  <div className="flex flex-col items-center p-6 rounded-[20px] mb-6 mt-4 mr-5 border-[1px] border-sky-400 bg-transparent bg-transparent hover:scale-110 hover:bg-cyan-800 duration-500">
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-white`}>
      <img src={icon} className="w-[50%] h-[50%] object-contain" />
    </div>
    <div>
      <h4 className="font-poppins font-semibold text-white text-[18px]">
        {title}
      </h4>
    </div>
  </div>
)

const Education = () => {
  return (
    <section id="features" className="max-w-[470 px]">
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} underline decoration-cyan-300`}>Education</h2>
        <p className={`${styles.paragraph} text-white font-extrabold text-2xl`}>Queen's University of Computing</p>
        <div className="flex flex-wrap items-center">
          <a href="https://www.cs.queensu.ca/undergraduate/programs/specializations/software-design.php" target="_blank" rel="noopener noreferrer" className="bg-transparent hover:underline inline-flex mr-4 text-blue-300 font-bold text-xl mt-3">Specialization: Software Design</a>
          <p className={`${styles.paragraph} text-white mt-5`}>September 2022 - Present</p>
        </div>
      </div>

      <p className={`${styles.paragraph} max-w-full flex text-white mt-5`}>Software Design is a program that looks to push the boundaries of computer systems beyond their current limits. Engaging in hands-on projects and coursework, I am gaining an in-depth understanding of software principles, programming languages, and experience in developing software applications.</p>

      {/* Skills */}
      <div className={layout.sectionInfo}>

        <p className={`${styles.subtitle} text-white mt-6`}>Languages</p>

        {/* Languages Cards */}
        <div className="flex justify-start mt-1">
          {languages.map((language,index) => (
            <LanguageCard key={language.id} {...language} index={index} />
          ))}
        </div>

        <p className={`${styles.subtitle} text-white`}>Tools / Frameworks</p>

        {/* Tools Cards */}
        <div className="flex justify-start mt-1">
          {tools.map((tool,index) => (
            <ToolCard key={tool.id} {...tool} index={index} />
          ))}
        </div>

      </div>

    </section>
  )
}

export default Education