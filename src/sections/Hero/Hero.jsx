import styles from './HeroStyles.module.css';    // Import css modules stylesheet as styles
//  import heroImg from '../../assets/hero-img.png';    // Import the hero image
// import themeIcon from '../../assets/sun.svg';    // Import the theme icon
import sun from '../../assets/sun.svg';    // Import the sun icon
import moon from '../../assets/moon.svg';    // Import the moon icon

import twitterLight from '../../assets/twitter-light.svg';    // Import the twitter icon
import twitterDark from '../../assets/twitter-dark.svg';    // Import the twitter icon
import githubLight from '../../assets/github-light.svg';    // Import the linkedin icon
import githubDark from '../../assets/github-dark.svg';    // Import the linkedin icon
import linkedinLight from '../../assets/linkedin-light.svg';    // Import the linkedin icon
import linkedinDark from '../../assets/linkedin-dark.svg'; 
import profileimage from '../../assets/profileImage.png';   // Import the linkedin icon

import CV from '../../assets/cv.pdf';    // Import the CV

import { useTheme } from '../../common/ThemeContext';


function Hero() {
    const { theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    
  return( 
  <section id="hero" className={styles.container}>
<div className={styles.colorModeContainer}>
    <img className={styles.hero} 
    src={profileimage} 
    alt="Profile picture of Harris Johnsen"
    />
    
    <img className={styles.colorMode}  
    src={themeIcon} 
    alt="Color mode icon"
    onClick={toggleTheme} 
    />
</div>

<div className={styles.info}>
<h1>
    Carlos
    <br />
    Augusto
</h1>

<h2>Frontend Developer</h2>
<span>
    <a href="https://x.com/borges_dev_js?s=21" target='_blank'>
    <img src={twitterIcon} alt="Twitter incon" /></a>

    <a href="https://github.com/carlos04js" target='_blank'>
    <img src={githubIcon} alt="Github incon" /></a>

    <a href="https://www.linkedin.com/in/carlos-augusto-037102256/" target='_blank'>
    <img src={linkedinIcon} alt="Linkedin incon" /></a>
</span>
<p className={styles.description}>
Passionate about crafting intuitive and responsive front-end experiences.
</p>

<a href={CV} download>
    <button className="hover" >
        Resume

    </button>


</a>
</div>
</section>
  )
}

export default Hero;
