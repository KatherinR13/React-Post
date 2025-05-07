import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {id: '0',name: 'Prabhu'},
  {id: '1',name: 'Rani'},
  {id: '2',name: 'Dave'}
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export const selectAllUsers = (state) => state.users

export default usersSlice.reducer