
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
                display: flex;
            }

            ul li {

                padding: .5rem 0;
                margin-right: 1rem

            }

            ul li a {
                font-size: 1.2rem;
                color: white;
                text-decoration: none;
            }

            `
        }</style>
    </div>
);

export default Navigator;