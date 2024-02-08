import { useEffect, useState } from "react";
import { useAppDispatch } from "./app/hooks";
import { fetchBreweries } from "./features/breweries/brewerySlice";
import Home from "./features/routing/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./features/routing/Contact";
import Detail from "./features/routing/Detail";

const App = () => {
	const dispatch = useAppDispatch();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		setIsLoading(true);
		dispatch(fetchBreweries());
		setIsLoading(false);
	}, []);

	return (
		<Router>
			<Routes>
                <Route path="/" element={!isLoading && <Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/:breweryId" element={<Detail />} />
            </Routes>
		</Router>
	);
};

export default App;
