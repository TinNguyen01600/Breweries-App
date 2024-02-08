import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import axios from "axios";

type Brewery = {
	id: string;
	name: string;
    address_1: string;
	city: string;
	state: string;
    country: string;
	website_url: string;
	img: string;
    phone: string;
};

interface BreweryState {
	breweryList: Brewery[];
	selectedBrewery: Brewery;
}

const initialState: BreweryState = {
	breweryList: [],
    selectedBrewery: Object.create(null)
};

const brewerySlice = createSlice({
	name: "brewery",
	initialState,
	reducers: {
		setBreweryList: (state, action: PayloadAction<any>) => {
			state.breweryList = action.payload;
		},
		setSelectedBrewery: (state, action: PayloadAction<any>) => {
			state.selectedBrewery = action.payload;
		},
	},
});

export const { setBreweryList, setSelectedBrewery } = brewerySlice.actions;

export const fetchBreweries = (page: number, perPage: number) => async (dispatch: any) => {
	const res = await axios(`https://api.openbrewerydb.org/v1/breweries?page=${page}&per_page=${perPage}`);
	let data = res.data;
	data = data.map((brewery: Brewery) => ({
		...brewery,
		img: `https://robohash.org/${brewery.id}?set=set4`,
	}));
	dispatch(setBreweryList(data));
};

export const fetchSingleBrewery =
	(id: string | undefined) => async (dispatch: any) => {
		const res = await axios(`https://api.openbrewerydb.org/v1/breweries/${id}`);
		let data = res.data;
		data = {
			...data,
			img: `https://robohash.org/${id}?set=set4`,
		};
		dispatch(setSelectedBrewery(data));
	};

export const selectBreweryList = (state: RootState) =>
	state.brewery.breweryList;

export default brewerySlice.reducer;
