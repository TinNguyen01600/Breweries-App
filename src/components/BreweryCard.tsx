import { Link } from "react-router-dom";
import { Brewery } from "../features/breweries/brewerySlice";

type Props = {
	brewery: Brewery;
};

const BreweryCard: React.FC<Props> = ({ brewery }) => {
	return (
		<>
			<article className="card">
				<div className="card-inner">
					<figure className="card-front">
						<p>{brewery.name}</p>
						<img src={brewery.img} alt="" />
					</figure>
					<div className="card-back">
						<h1>{brewery.name}</h1>
						<ul>
							<li>Phone: {brewery.phone}</li>
							<li>Type: {brewery.brewery_type}</li>
						</ul>
						<Link to={`/${brewery.id}`} key={brewery.id}>
                            <button>View more</button>
                        </Link>
					</div>
				</div>
			</article>
		</>
	);
};

export default BreweryCard;
