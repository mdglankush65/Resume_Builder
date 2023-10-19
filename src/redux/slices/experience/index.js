import { createSlice } from "@reduxjs/toolkit";

export const startState = {
    title: 'xyz',
    organization: 'abcd',
    start: 'DD/MM/YYYY',
    end: 'DD/MM/YYYY'
};

export const experienceSlice = createSlice({
    name: 'experience',
    initialState: {},
    reducers: {
        update: (state, action) => {
            return { ...state, [action.payload.key]: action.payload.value };
        }
    }
});

export const { update } = experienceSlice.actions;
export default experienceSlice.reducer;