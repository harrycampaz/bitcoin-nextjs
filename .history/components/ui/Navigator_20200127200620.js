
import Link from "next/link";
const Navigator = (props) => (
    <div>
        <ul>
            <li> <Link href="/" ><a> Inicio</a></Link></li>
            <li> <Link href="/about" ><a> About</a></Link></li>
        </ul>
    </div>
);

export default Navigator;