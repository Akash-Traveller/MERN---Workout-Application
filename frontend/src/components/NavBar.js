import { Link } from "react-router-dom"

const NavBar = () => {
    return(
        <header className="container">
            <Link to="/" > 
             <h1>WorkOut Application </h1>
            </Link>
        </header>
    )
}

export default NavBar