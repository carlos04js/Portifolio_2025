import styles from "./ProjectsStyles.module.css";
// import Viberr from "../../assets/viberr.png";
// import freshBurger from "../../assets/fresh-Burger.png";

// import hipsster from "../../assets/hipsster.png";

// import fitLift from "../../assets/fitLift.png";

import ProjectCard from "../../common/ProjectCard";

// import nature from "../../assets/nature.png";

import audiobook from "../../assets/audiobook.png";

import cosmepedia from "../../assets/cosmepedia.png";

import rockstar from "../../assets/rockstar.png";

import bookwave from "../../assets/bookwave.png";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={cosmepedia}
          link="https://carlos04js.github.io/AudioBook"
          h3="Cosmepedia"
          p="College Project"
        />
        <ProjectCard
          src={audiobook}
          link="https://github.com/carlos04js/AudioBook/blob/main/README.md"
          h3="AudioBook"
          p="AudioBook palyer"
        />
        <ProjectCard
          src={rockstar}
          link="https://github.com/carlos04js/PROJETOGTA/blob/main/README.md"
          h3="GTA Rockstar"
          p="landding page On gta style"
        />
        <ProjectCard
          src={bookwave}
          link="https://carlos04js.github.io/AudioBook"
          h3="BookWave"
          p="Resposive audioBook player V1 (on development)"
        />
      </div>
    </section>
  );
}

export default Projects;
