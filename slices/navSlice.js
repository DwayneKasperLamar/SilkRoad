import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeinformation: null,
}

export const navSlice = createSlice({
    name:'nav',
    initialState,
    reducer:{
            setOrigin: (state, action) => {
                state.origin = action.payload;
            },

             setDestination: (state, action) => {
                state.destination = action.payload;
            },

            setTravelTimeinformation: (state, action) => {
                state.travelTimeinformation = action.payload;
            }
    }
})


export const{ setOrigin, setDestination,setTravelTimeinformation} =navSlice.actions;

export const selectOrigin = (state)=> state.nav.origin
export const selectDestination = (state)=> state.nav.origin
export const selectTravelTimeinformation = (state)=> state.nav.origin


export default navSlice.reducer;