import { useCallback, useEffect, useState } from "react";
import { Brewery } from "../breweries/brewerySlice";
import axios from "axios";

const SearchBar: React.FC = () => {
	const [query, setQuery] = useState<string>("");
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
		console.log(query);
		callbackSearchByName();
	};

	const _ = require("lodash");
	const searchByName = () => {
		console.log("Fetch data");
	};
	let debounceSearchByName = _.debounce(searchByName, 3000);
	const callbackSearchByName = useCallback(() => debounceSearchByName(), []);

	const [searchedBreweries, setSearchedBreweries] = useState<Brewery[]>([]);
	const fetchUsers = async (query: string) => {
		const res = await axios(
			`https://api.openbrewerydb.org/v1/breweries?by_name=${query}&page=1&per_page=5`
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
