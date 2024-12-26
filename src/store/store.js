import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice'
import stateManaged from './stateSlice'

const store = configureStore({
    reducer: {
        auth: authSlice,
        stateManage: stateManaged
    }
})

export default store;