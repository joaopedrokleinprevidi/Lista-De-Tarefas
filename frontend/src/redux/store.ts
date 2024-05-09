import { configureStore } from "@reduxjs/toolkit";
import ListItemReducer from './slices/ListItem'

const store = configureStore({
    reducer: {
        listItems: ListItemReducer
    },
})

export default store