import { FaBook, FaMicroblog } from "react-icons/fa";
import Style from "../styles/Projects.module.css";

function Projects() {
  return (
    <div class={Style.App}>
      <h1 className={Style.background}>Dotto</h1>
      <div id={Style.main}>
        <h1 className={Style.title}>
          Hey, I'm <span className={Style.special}>Dotto</span>.
        </h1>
        <p className={Style.paragraph}>
          I'm a <span className={Style.special}>frontend</span> &{" "}
          <span className={Style.special}>backend</span> developer from 🇮🇹.
        </p>
        <div id={Style.cards}>
          <div className={Style.card}>
            <FaBook /> Projects
          </div>
          <div className={Style.card}>
            <FaMicroblog /> Blog
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
