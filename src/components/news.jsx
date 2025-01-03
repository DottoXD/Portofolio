import News from "../styles/News.module.css";
import { IoIosWarning } from "react-icons/io";

function NewsComponent() {
  return (
    <div id={News.main}>
      <p>
        <IoIosWarning /> This website is WIP - please report bugs{" "}
        <a href="https://github.com/DottoXD/Portofolio" target="_blank">
          here
        </a>
        .
      </p>
    </div>
  );
}

export default NewsComponent;
