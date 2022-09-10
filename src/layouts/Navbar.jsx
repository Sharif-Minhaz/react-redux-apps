import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useGetPostByIdQuery } from "../services/post/postSlice";

const linkStyle = { marginRight: "10px", textDecoration: "none" };

const Navbar = () => {
	const [id, setId] = useState("");
	const singlePost = useGetPostByIdQuery(Number(id));
	
	const handleSearch = (e) => {
		e.preventDefault();
		console.log(singlePost);
	};

	return (
		<nav>
			<NavLink style={linkStyle} to="/">
				All Post
			</NavLink>
			<NavLink style={linkStyle} to="/add-post">
				Add Post
			</NavLink>
			<form onSubmit={handleSearch}>
				<input
					type="text"
					value={id}
					onChange={(e) => setId(e.target.value)}
					required
					placeholder="Enter post id"
				/>
				<button>search</button>
			</form>
		</nav>
	);
};

export default Navbar;
