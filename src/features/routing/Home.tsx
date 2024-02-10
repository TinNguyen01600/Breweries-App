import SearchBar from "../Search/SearchBar";
import MyPagination from "../pagination/MyPagination";
import Page from "../pagination/Page";

const Home: React.FC = () => {
	return (
		<>
            <SearchBar />
            {/* <Page page={2}/>
            <MyPagination /> */}
		</>
	);
};

export default Home;
