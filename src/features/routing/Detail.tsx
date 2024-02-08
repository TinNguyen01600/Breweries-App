import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect, useState } from "react";
import { fetchSingleBrewery } from "../breweries/brewerySlice";
import Spinner from "../../components/Spinner";

const Detail = () => {
	const { breweryId } = useParams();
	const brewery = useAppSelector((state) => state.brewery.selectedBrewery);

	const dispatch = useAppDispatch();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		setIsLoading(true);
		dispatch(fetchSingleBrewery(breweryId));
		setIsLoading(false);
	}, []);

	return (
		<>
			{isLoading ? (
				<Spinner />
			) : (
				<>
					<figure aria-label="brewery-image">
						<img src={brewery.img} alt="" />
					</figure>
					<section aria-label="brewery-info">
						<h1 aria-label="brewery-name">{brewery.name}</h1>
						<p aria-label="brewery-address">
							Address: {brewery.address_1},{brewery.city} city,{" "}
							{brewery.state}, {brewery.country}.
						</p>
						<p aria-label="brewery-phone">
							Phone number: {brewery.phone}
						</p>
						<p aria-label="brewery-url">
							<a href={brewery.website_url} target="_blank">
								{brewery.name}
							</a>
						</p>
					</section>
				</>
			)}
		</>
	);
};

export default Detail;
