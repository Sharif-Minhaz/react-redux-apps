import { BrowserRouter } from "react-router-dom";
import Routers from "../routers/Routers";
import PostView from "../services/post/PostView";
import "./App.css";
import Navbar from "../layouts/Navbar";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routers />
		</BrowserRouter>
	);
};

export default App;
