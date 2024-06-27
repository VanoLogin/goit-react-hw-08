import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations.js";
// import { selectNameFilter } from "../filters/selectors.js";

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  error: false,
  loading: false,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.error = false;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(addContact.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.error = false;
        state.loading = false;
      })
      .addCase(addContact.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.error = false;
        state.loading = false;
      })
      .addCase(deleteContact.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

// export const selectContacts = (state) => state.contacts.items;
// export const selectLoading = (state) => state.contacts.loading;
// export const selectError = (state) => state.contacts.error;
// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectNameFilter],
//   (contacts, name) =>
//     contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(name.toLowerCase())
//     )
// );

export default contactsSlice.reducer;
