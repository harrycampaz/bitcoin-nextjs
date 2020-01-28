
import Link from "next/link";
const Navigator = (props) => (
    <nav className="navbar navbar-expand navbar-dark">
        <div className="container">
            <Link href="/"><a className="navbar-bramd">BitCoin App</a></Link>
        </div>
    </nav>
);

export default Navigator;