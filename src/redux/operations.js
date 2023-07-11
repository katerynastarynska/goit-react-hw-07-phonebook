import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://64ac27839edb4181202f31b6.mockapi.io';

export const fetchContacts = createAsyncThunk(
    "fetchContactsStatus", async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            const contacts = response.data
            console.log(contacts)
            return contacts;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    })


export const addNewContact = createAsyncThunk(
    "addNewContactStatus",
    async ({ name, number }, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", { name, number });
            console.log(response.data)
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "deleteContactStatus",
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            console.log(response.data)

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

