import styles from './style';

import { BrowserRouter } from 'react-router-dom';

import { Navbar, Hero, About, Education, Projects, Contact, Footer } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-gray-900 w-full overflow-hidden">
        <div className={`${styles.flexCenter} fixed`}>
          <div className="xl:max-w-[1280px] w-full">
            <Navbar />
          </div>
        </div>

        <div className={`bg-gray-900 ${styles.flexStart}`} style={{ marginTop: '25vh' }}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`bg-gray-900 ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
              <About />
              <Education />
              <Projects />
              <Contact />
              <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;