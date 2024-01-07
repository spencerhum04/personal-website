import styles, { layout } from '../style';
import { languages } from '../constants';

const LanguageCard = ({ icon }) => (
  <div className="flex flex-col items-center p-6 mb-6 mt-2 mr-5 bg-zinc-700 hover:bg-blue-300">
    <div className={`w-[499px] h-[250px] ${styles.flexCenter}`}>
      <img src={icon} className="w-[50%] h-[50%] object-contain" />
    </div>
  </div>
)

const Projects = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} underline decoration-cyan-300`}>Projects</h2>

        {/* Languages Cards */}
        <div className="flex flex-wrap justify-start mt-1">
          {languages.map((language,index) => (
            <LanguageCard key={language.id} {...language} index={index} />
          ))}
        </div>

      </div>

    </section>
  )
}

export default Projects