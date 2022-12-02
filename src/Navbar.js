import { Link } from "react-router-dom";

export default function NavBar(){
    return (
        <div className="nav">
            <nav>
                <Link to="/">
                <img src="https://www.pngfind.com/pngs/m/385-3859275_totoro-studio-ghibli-logo-hd-png-download.png" alt="logo"/>
                </Link>    

                <Link to="/">Home</Link>
                <Link to="/Movies">Movies</Link>
                <Link to="/People">People</Link>
                <Link to="/Locations">Locations</Link>
            </nav>
        </div>
    )
}