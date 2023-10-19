import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    profilePhoto: '/public/images/Avatar.jpeg',
    firstName: 'FirstName',
    lastName: 'LastName',
    email: 'yourmail@gmail.com',
    mobile: +911234567890,
    address: 'hno-123,abc street,New Delhi,India',
    state: 'Your State/Region',
    city: 'New Delhi',
    postalCode: 123456,
    objective: 'Write something about yourself'
}
export const infoSlice = createSlice({
    name: "Information",
    initialState,
    reducers: {
        changeInfo: (state, action) => { return { ...state, ...action.payload } }
    }
});

export const { changeInfo } = infoSlice.actions;
export default infoSlice.reducer;