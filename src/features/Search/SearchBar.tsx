import { useCallback, useState } from "react";
import { Brewery } from "../breweries/brewerySlice";
import axios from "axios";
import DisplaySearch from "./DisplaySearch";
import MyPagination from "../pagination/MyPagination";

type Props = {
	query: string;
	setQuery: (query: string) => void;
};

const SearchBar: React.FC<Props> = ({ query, setQuery }) => {
	const [searchedBreweries, setSearchedBreweries] = useState<Brewery[]>([]);

	const fetchBreweriesByName = async (query: string, page: number) => {
		const res = await axios(
			`https://api.openbrewerydb.org/v1/breweries/search?query=${query}&page=${page}&per_page=8`
		);
		let data = res.data;
		data = data.map((brewery: Brewery) => ({
			...brewery,
			img: `https://robohash.org/${brewery.id}?set=set4`,
		}));
		setSearchedBreweries(data);
	};
	const _ = require("lodash");
	const searchByName = (query: string) => {
		fetchBreweriesByName(query, 1);
	};
	const debouncedSearchByName = useCallback(
		_.debounce(searchByName, 1000),
		[]
	);
	const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
		debouncedSearchByName(e.target.value);
	};
	const handlePageChange = (
		event: React.ChangeEvent<unknown>,
		value: number
	) => {
		fetchBreweriesByName(query, value);
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
						onChange={handleQueryChange}
						autoFocus
					/>
				</form>
			</section>
			{query && (
				<>
					<DisplaySearch searchedBreweries={searchedBreweries} />
					<MyPagination handleChange={handlePageChange} />
				</>
			)}
		</>
	);
};
export default SearchBar;
