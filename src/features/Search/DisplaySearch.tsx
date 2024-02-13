import { Brewery } from "../breweries/brewerySlice";
import BreweryCard from "../../components/BreweryCard";

type Props = {
	searchedBreweries: Brewery[];
};

const DisplaySearch: React.FC<Props> = ({ searchedBreweries }) => {
	return (
		<main className="page">
			{searchedBreweries.map((brewery) => (
				<div key={brewery.id}>
					<BreweryCard brewery={brewery} />
				</div>
			))}
		</main>
	);
};

export default DisplaySearch;
