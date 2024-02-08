import React from "react";
import { useAppSelector } from "../../app/hooks";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
	const breweryList = useAppSelector((state) => state.brewery.breweryList);
	return (
		<>
			{breweryList.map((brewery) => (
				<Link to={`/${brewery.id}`} key={brewery.id}>
					<li>
                        {brewery.name}
                        <img src={brewery.img} alt="" />
                    </li>
				</Link>
			))}
		</>
	);
};

export default Home;
