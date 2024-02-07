import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

import axios from "axios";

type Brewery = {
	id: string;
	name: string;
	city: string;
	state: string;
	website_url: string;
	img: string;
};

interface BreweryState {
	breweryList: Brewery[];
}

const initialState: BreweryState = {
	breweryList: [],
};

const brewerySlice = createSlice({
	name: "brewery",
	initialState,
	reducers: {
		setBreweryList: (state, action: PayloadAction<any>) => {
			state.breweryList = action.payload;
		},
	},
});

export const { setBreweryList } = brewerySlice.actions;

export const fetchBreweries = () => async (dispatch: any) => {
	const generateRandomImg = () => {
		const rand = Math.floor(Math.random() * 100) + 1;
		return `https://picsum.photos/300/200?random=${rand}`;
	};
	const res = await axios("https://api.openbrewerydb.org/v1/breweries");
	let data = res.data;
	data = data.map((brewery: Brewery) => ({
		...brewery,
		img: generateRandomImg(),
	}));
	dispatch(setBreweryList(data));
};

export const selectBreweryList = (state: RootState) =>
	state.brewery.breweryList;

export default brewerySlice.reducer;
