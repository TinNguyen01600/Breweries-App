import { Brewery } from "../breweries/brewerySlice";
import BreweryCard from "../../components/BreweryCard";

type Props = {
	searchedBreweries: Brewery[];
};

const DisplaySearch: React.FC<Props> = ({ searchedBreweries }) => {
	return (
		<>
			{searchedBreweries.map((brewery) => (
				<div key={brewery.id}>
					<BreweryCard brewery={brewery} />
				</div>
			))}
		</>
	);
};

export default DisplaySearch;
