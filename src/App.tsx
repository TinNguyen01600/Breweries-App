import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import { fetchBreweries } from "./features/breweries/brewerySlice";

const App = () => {
    const userList = useAppSelector(state => state.brewery.breweryList)
    const dispatch = useAppDispatch()
    const [isLoading, setIsLoading] = useState<boolean>(false)

	useEffect(() => {
        setIsLoading(true)
        dispatch(fetchBreweries())
        setIsLoading(false)
	}, []);

	return <div>App</div>;
};

export default App;
