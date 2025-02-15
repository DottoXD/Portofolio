import News from "../styles/News.module.css";
import { IoIosWarning } from "react-icons/io";

function NewsComponent() {
  return (
    <div id={News.main}>
      <p>
        <IoIosWarning /> This website is WIP -
        <a href="https://github.com/DottoXD/Portofolio" target="_blank" >
          found a bug?
        </a>
      </p>
    </div>
  );
}

export default NewsComponent;
