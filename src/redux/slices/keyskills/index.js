import { createSlice } from "@reduxjs/toolkit";

export const initialState=[];
export const keyskillSlice = createSlice({
    name:'keyskill',
    initialState,
    reducers:{
        update:(state,action)=>[...state,...action.payload]
    }
});

export const {update} = keyskillSlice.actions;
export default keyskillSlice.reducer;