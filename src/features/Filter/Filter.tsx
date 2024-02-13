import { useState, Dispatch, SetStateAction } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Brewery } from "../breweries/brewerySlice";
import axios from "axios";
import MyPagination from "../pagination/MyPagination";
import DisplayFilter from "./DisplayFilter";

const Types = ["micro", "nano", "bar"];
type Props = {
	type: string;
	setType: Dispatch<SetStateAction<string>>;
};

const Filter: React.FC<Props> = ({ type, setType }) => {
	const [filteredBreweries, setFilteredBreweries] = useState<Brewery[]>([]);

	const fetchBreweriesByName = async (filterType: string, page: number) => {
		const res = await axios(
			`https://api.openbrewerydb.org/v1/breweries?by_type=${filterType}&page=${page}&per_page=8`
		);
		let data = res.data;
		data = data.map((brewery: Brewery) => ({
			...brewery,
			img: `https://robohash.org/${brewery.id}?set=set4`,
		}));
		setFilteredBreweries(data);
	};
	const handleChange = (event: SelectChangeEvent) => {
		setType(event.target.value as string);
		fetchBreweriesByName(event.target.value as string, 1);
	};
	const handlePageChange = (
		event: React.ChangeEvent<unknown>,
		value: number
	) => {
		fetchBreweriesByName(type, value);
	};

	return (
		<>
			<Box sx={{ minWidth: 120 }}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Types</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={type}
						label="Age"
						onChange={handleChange}
					>
						{Types.map((Type) => (
							<MenuItem value={Type} key={Type}>
								{Type.toUpperCase()}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>

			{type && (
				<>
					<DisplayFilter filteredBreweries={filteredBreweries} />
					<MyPagination handleChange={handlePageChange} />
				</>
			)}
		</>
	);
};

export default Filter;
