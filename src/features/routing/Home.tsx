import SearchBar from "../Search/SearchBar";
import MyPagination from "../pagination/MyPagination";
import BreweriesList from "../pagination/BreweriesList";
import { useState } from "react";
import Filter from "../Filter/Filter";

const Home: React.FC = () => {
	const [page, setPage] = useState(1);
	const [query, setQuery] = useState<string>("");
	const [type, setType] = useState("");

	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
	};
	return (
		<>
			<SearchBar query={query} setQuery={setQuery}/>
            <Filter type={type} setType={setType}/>
			{!query && !type && (
				<>
					<BreweriesList page={page} />
					<MyPagination handleChange={handleChange} />
				</>
			)}
		</>
	);
};

export default Home;
