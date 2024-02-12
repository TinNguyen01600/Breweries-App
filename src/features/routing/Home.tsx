import SearchBar from "../Search/SearchBar";
import MyPagination from "../pagination/MyPagination";
import Page from "../pagination/Page";
import { useState } from "react";

const Home: React.FC = () => {
	const [page, setPage] = useState(1);
	const [query, setQuery] = useState<string>("");

	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
	};
	return (
		<>
			<SearchBar query={query} setQuery={setQuery}/>
			{!query && (
				<>
					<Page page={page} />
					<MyPagination handleChange={handleChange} />
				</>
			)}
		</>
	);
};

export default Home;
