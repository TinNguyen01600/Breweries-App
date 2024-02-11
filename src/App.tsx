import Home from "./features/routing/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./features/routing/Contact";
import Detail from "./features/routing/Detail";
import NavBar from "./components/NavBar";

const App = () => {
	return (
		<div className="app">
			<Router>
                <NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/:breweryId" element={<Detail />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
