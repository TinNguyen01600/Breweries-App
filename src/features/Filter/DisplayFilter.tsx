import { Brewery } from "../breweries/brewerySlice";
import BreweryCard from "../../components/BreweryCard";

type Props = {
	filteredBreweries: Brewery[];
};

const DisplayFilter: React.FC<Props> = ({ filteredBreweries }) => {
	return (
		<main className="page">
			{filteredBreweries.map((brewery) => (
				<div key={brewery.id}>
					<BreweryCard brewery={brewery} />
				</div>
			))}
		</main>
	);
};

export default DisplayFilter;
