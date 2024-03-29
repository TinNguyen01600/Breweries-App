import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchBreweries } from "../breweries/brewerySlice";
import Spinner from "../../components/Spinner";
import BreweryCard from "../../components/BreweryCard";

type Props = {
	page: number;
};

const BreweriesList: React.FC<Props> = ({ page }) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const dispatch = useAppDispatch();
	const breweryList = useAppSelector((state) => state.brewery.breweryList);

	useEffect(() => {
		setIsLoading(true);
		dispatch(fetchBreweries(page, 8));
		setIsLoading(false);
	}, [page]);

	return (
		<>
			{isLoading ? (
				<Spinner />
			) : (
				<main className="page">
					{breweryList.map((brewery) => (
						<div key={brewery.id}>
							<BreweryCard brewery={brewery} />
						</div>
					))}
				</main>
			)}
		</>
	);
};

export default BreweriesList;
