import React, { FC, useState } from 'react';
import styles from './App.module.scss';
import AboutMe from './Components/AboutMe/AboutMe';
import Contact from './Components/Contact/Contact';
import Education from './Components/Education/Education';
import Footer from './Components/Footer/Footer';
import { HamburgerMenu } from './Components/HamburgerMenu/HamburgerMenu';
import LandingPage from './Components/LandingPage/LandingPage';
import { LanguageSwitcher } from './Components/LanguageSwitcher/LanguageSwitcher';
import { Menu } from './Components/Menu/Menu';
import Projects from './Components/Projects/Projects';
import { Technologies } from './Components/Technologies/Technologies';
import i18n from './i18n';

export type LanguageOptions = 'pl' | 'en';

const App: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleChangeLanguage = (lng: LanguageOptions) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div className={styles.bgImage}>
        <LanguageSwitcher changeLanguage={handleChangeLanguage} />
        <HamburgerMenu isOpen={isMenuOpen} onOpen={() => setIsMenuOpen(true)} />
        <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        <div className={styles.container}>
          <LandingPage />
        </div>
      </div>
      <AboutMe />
      <Education />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
