import { Link } from "react-router-dom"

const NavBar = () => {
    return(
        <header className="container">
            <Link to="/" > 
             <h1>WorkOut Buddy </h1>
            </Link>
        </header>
    )
}

export default NavBar