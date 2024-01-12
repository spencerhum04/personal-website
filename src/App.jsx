import styles from './style';

import { BrowserRouter } from 'react-router-dom';

import { Navbar, Hero, About, Education, Projects, Contact, Footer } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter} fixed`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`} style={{ marginTop: '80px' }}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
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