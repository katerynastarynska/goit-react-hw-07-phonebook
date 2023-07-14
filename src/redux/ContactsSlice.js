import { fetchContacts, addNewContact, deleteContact } from "./operations";

const { createSlice, isAnyOf } = require("@reduxjs/toolkit");

const contactsInitialState = {
    items: [],
    isLoading: false,
    error: "null"
};

const handlePending = (state) => {
    state.isLoading = true;
};
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};
const handleFulfilled = (state) => {
    state.isLoading = false;
    state.error = null;
}
const handleFulfilledFetch = (state, action) => {
    state.items = action.payload;
};
const handleFulfilledAdd = (state, action) => {
    state.items.push(action.payload);
};
const handleFulfilledDelete = (state, action) => {
    const index = state.items.findIndex(
        contact => contact.id === action.payload.id
    );
    state.items.splice(index, 1);
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.fulfilled, handleFulfilledFetch)
            .addCase(addNewContact.fulfilled, handleFulfilledAdd)
            .addCase(deleteContact.fulfilled, handleFulfilledDelete)
            .addMatcher(isAnyOf(fetchContacts.pending,
                addNewContact.pending,
                deleteContact.pending),
                handlePending)
            .addMatcher(isAnyOf(fetchContacts.rejected,
                addNewContact.rejected,
                deleteContact.rejected),
                handleRejected)
            .addMatcher(isAnyOf(fetchContacts.fulfilled,
                addNewContact.fulfilled,
                deleteContact.fulfilled),
                handleFulfilled)
    }
})

export const contactsReducer = contactsSlice.reducer;