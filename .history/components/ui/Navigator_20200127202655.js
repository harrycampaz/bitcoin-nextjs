
import Link from "next/link";
const Navigator = (props) => (
    <nav className="navbar navbar-expand navbar-dark bg-success">
        <div className="container">
            <Link href="/"><a className="navbar-bramd">BitCoin App</a></Link>
            <div className="collase navbar-collapse">
                <ul className="navbar-nav ml-auto">

                    <li>
                    <Link href="/" ><a>Home</a></Link>
                    </li>
                  
                    <li>
                    <Link href="/nosotros" ><a>Nosotros</a></Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navigator;