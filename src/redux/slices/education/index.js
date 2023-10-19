import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    domain: 'Computer',
    university: 'XYZ',
    degree: 'Bachelor',
    start: 'DD/MM/YYYY',
    end: 'DD/MM/YYYY'
}

const educationSlice = createSlice({
    name: 'education',
    initialState,
    reducers: {
        changeInfo: (state, action) => {
            // You should return the new state, not reassign it
            return { ...state, ...action.payload };
        }
    }
});

export const { changeInfo } = educationSlice.actions;
export default educationSlice.reducer;