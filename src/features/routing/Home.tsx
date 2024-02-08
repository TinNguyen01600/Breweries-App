import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Link } from "react-router-dom";
import { fetchBreweries } from "../breweries/brewerySlice";
import Spinner from "../../components/Spinner";

const Home: React.FC = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const dispatch = useAppDispatch();
	const breweryList = useAppSelector((state) => state.brewery.breweryList);

	useEffect(() => {
		setIsLoading(true);
		dispatch(fetchBreweries(1, 4));
		setIsLoading(false);
	}, []);
	return (
		<>
			{isLoading ? (
				<Spinner />
			) : (
				<>
					{breweryList.map((brewery) => (
						<Link to={`/${brewery.id}`} key={brewery.id}>
							<li>
								{brewery.name}
								<img src={brewery.img} alt="" />
							</li>
						</Link>
					))}
				</>
			)}
		</>
	);
};

export default Home;
