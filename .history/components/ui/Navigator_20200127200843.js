
import Link from "next/link";
const Navigator = (props) => (
    <div>
        <ul>
            <li> <Link href="/" ><a> Inicio</a></Link></li>
            <li> <Link href="/about" ><a> About</a></Link></li>
        </ul>
        <style jsx>{
            `
            ul {
                background-color:#333;
                list-style:none;
                displey: flex;
            }

            `
        }</style>
    </div>
);

export default Navigator;