import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/show-books">Show-books</NavLink>
			<NavLink to="/add-book">Add-book</NavLink>
		</nav>
	);
};

export default Navbar;
