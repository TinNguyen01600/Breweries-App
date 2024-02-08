import Home from "./features/routing/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./features/routing/Contact";
import Detail from "./features/routing/Detail";
import NavBar from "./components/NavBar";

const App = () => {
	return (
		<main>
			<NavBar />
			<body>
				<Router>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/:breweryId" element={<Detail />} />
					</Routes>
				</Router>
			</body>
		</main>
	);
};

export default App;
