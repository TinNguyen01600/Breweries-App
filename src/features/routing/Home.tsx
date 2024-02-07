import React from "react"
import { useAppSelector } from "../../app/hooks"

const Home: React.FC = () => {
    const breweryList = useAppSelector(state => state.brewery.breweryList)
    return (
        <>
            {breweryList.map(brewery => (
                <li key={brewery.id}>{brewery.name}</li>
            ))}
        </>
    )
}

export default Home