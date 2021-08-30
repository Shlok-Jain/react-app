import { NavLink,Link } from "react-router-dom";

export const Navbar = (props) => {
    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" onClick={()=>{props.changeProgress();document.title="Home"}}>MyTools</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink exact className="nav-link" activeClassName="active" onClick={()=>{props.changeProgress();document.title="Home"}} to="/" id="home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact className="nav-link" to="/calculator" onClick={()=>{props.changeProgress();document.title="Calculator"}}>Calculator</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact className="nav-link" to="/about" onClick={()=>{props.changeProgress();document.title="About"}}>About</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search"/>
                            <button className="btn btn-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
