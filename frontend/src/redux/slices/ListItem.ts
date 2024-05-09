import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalItems: 0
}

const ListItemSlice = createSlice({
    name: 'ListItem',
    initialState,
    reducers: {
        ADD_ITEM(state) {

        },
        
        UPDATE_ITEM(state) {

        },

        REMOVE_ITEM(state){

        }
    }
})

export const { ADD_ITEM, UPDATE_ITEM, REMOVE_ITEM } = ListItemSlice.actions;
export default ListItemSlice.reducer;