import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

import axios from "axios";

type Brewery = {
    id: string,
    name: string,
    city: string,
    state: string,
    website_url: string
}

interface BreweryState {
    breweryList: Brewery[]
}

const initialState: BreweryState = {
    breweryList: []
}

const brewerySlice = createSlice ({
    name: 'brewery',
    initialState,
    reducers: {
        setBreweryList: (state, action: PayloadAction<any>) => {
            state.breweryList = action.payload
        }
    }
})

export const { setBreweryList } = brewerySlice.actions

export const fetchBreweries = () => async (dispatch: any) => {
    const res = await axios ('https://api.openbrewerydb.org/v1/breweries')
    const data = res.data
    dispatch(setBreweryList(data))
}

export const selectBreweryList = (state: RootState) => state.brewery.breweryList

export default brewerySlice.reducer

