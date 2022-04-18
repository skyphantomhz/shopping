import { configureStore } from "@reduxjs/toolkit";

import rocketReducer from '../feature/onboarding/home/rocket_slice'

export default configureStore({
    reducer: {
        rocket: rocketReducer
    }
})