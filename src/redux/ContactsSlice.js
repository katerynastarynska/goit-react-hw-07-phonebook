import { fetchContacts, addNewContact, deleteContact } from "./operations";

const { createSlice } = require("@reduxjs/toolkit");

const contactsInitialState = {
    items: [],
    isLoading: false,
    error: "null"
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchContacts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchContacts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        });
        builder.addCase(fetchContacts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
        builder.addCase(addNewContact.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(addNewContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        });
        builder.addCase(addNewContact.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
        builder.addCase(deleteContact.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(deleteContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
                contact => contact.id === action.payload.id
            );
            state.items.splice(index, 1);
        });
        builder.addCase(deleteContact.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
})

export const contactsReducer = contactsSlice.reducer;