import MyPagination from "../pagination/MyPagination";
import Page from "../pagination/Page";

const Home: React.FC = () => {
	return (
		<>
            <Page page={2}/>
            <MyPagination />
		</>
	);
};

export default Home;
