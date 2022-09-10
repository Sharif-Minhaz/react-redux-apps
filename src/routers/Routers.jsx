import { Route, Routes } from "react-router-dom";
import PostView from "../services/post/PostView";
import Error from "../pages/Error";
import AddPost from "../pages/AddPost";
import EditPost from "../pages/EditPost";

const Routers = () => {
	return (
		<Routes>
			<Route path="/" element={<PostView />} />
			<Route path="/add-post" element={<AddPost />} />
			<Route path="/edit-post/:id" element={<EditPost />} />
			<Route path="*" element={<Error />} />
		</Routes>
	);
};

export default Routers;
