import { useCallback, useEffect, useState } from "react";
import { Brewery } from "../breweries/brewerySlice";
import axios from "axios";

const SearchBar: React.FC = () => {
	const [query, setQuery] = useState<string>("");
	const [searchedBreweries, setSearchedBreweries] = useState<Brewery[]>([]);

	const _ = require("lodash");
	const searchByName = (query: string) => {
		fetchBreweriesByName(query);
	};
	const debouncedSearchByName = useCallback(
		_.debounce(searchByName, 1000),
		[]
	);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
		debouncedSearchByName(e.target.value);
	};

	const fetchBreweriesByName = async (query: string) => {
		const res = await axios(
			`https://api.openbrewerydb.org/v1/breweries/search?query=${query}&page=1&per_page=5`
		);
		let data = res.data;
		data = data.map((brewery: Brewery) => ({
			...brewery,
			img: `https://robohash.org/${brewery.id}?set=set4`,
		}));
		setSearchedBreweries(data);
	};

	return (
		<>
			<section className="search-bar">
				<form action="">
					<input
						type="text"
						className="form-control"
						placeholder="Search"
						value={query}
						onChange={handleChange}
						autoFocus
					/>
				</form>
			</section>
			{searchedBreweries.map((brewery) => (
				<li key={brewery.id}>{brewery.name}</li>
			))}
		</>
	);
};
export default SearchBar;
