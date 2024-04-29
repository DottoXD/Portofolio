import News from "@/styles/News.module.css";

import Link from "next/link";
import { IoIosWarning } from "react-icons/io";

export default function NewsComponent() {
    return (
        <div id={ News.main }>
            <p><IoIosWarning/> This website is WIP - please report bugs <Link href="https://github.com/DottoXD/Portofolio">here</Link>.</p>
        </div>
    )
}