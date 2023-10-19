import { configureStore } from '@reduxjs/toolkit'
import informationReducer from './slices/info';
import educationReducer from './slices/education';
import keyskillReducer from './slices/keyskills';
import experienceReducer from './slices/experience';

export const store = configureStore({
    reducer: {
        information: informationReducer,
        education: educationReducer,
        keyskill: keyskillReducer,
        experience: experienceReducer
    },
})