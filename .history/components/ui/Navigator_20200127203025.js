
import Link from "next/link";
const Navigator = (props) => (
    <nav className="navbar navbar-expand navbar-dark">
        <div className="container">
            <Link href="/"><a className="navbar-bramd">BitCoin App</a></Link>
            <div className="collase navbar-collapse">
                <ul className="navbar-nav ml-auto">

                    <li className="nav-item">
                    <Link href="/" ><a className="nav-link">Home</a></Link>
                    </li>
                  
                    <li className="nav-item">
                    <Link href="/about"><a  className="nav-link">Nosotros</a></Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navigator;