import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Get Books
export const GetBooks = createAsyncThunk("book/getBooks", async (args, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
  try{
    const responed = await fetch("http://localhost:4000/Books");
    const data = await responed.json();
      return data;
  }catch(error){
    return rejectWithValue(error.message);
  }
})

// inset Books
export const insetBooks = createAsyncThunk("book/insetBooks", async (bookData, thunkAPI) => {
  const {rejectWithValue, getState} = thunkAPI;
  try{
    bookData.Name = getState().AuthSlice.name;
    const responed = await fetch("http://localhost:4000/Books",{
      method: "POST",
      body: JSON.stringify(bookData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    });
    const data = await responed.json();
    return data;
  } catch(error){
    return rejectWithValue(error.message);
  }
})

//Delete Books 
export const deleteBooks = createAsyncThunk("book/deleteBooks", async (id, thunkAPI)=>{
  const {rejectWithValue} = thunkAPI;
  try{
    await fetch(`http://localhost:4000/Books/${id}`,{
      method: "DELETE"
    })
    return id;
  } catch(error){
    return rejectWithValue(error.message);
  }
})


const bookSlice = createSlice({
  name: 'book',
  initialState: {books:[] , isLoading: false, error: null},
  extraReducers: {
    //Get Books
    [GetBooks.pending]: (state,action) =>{
      state.isLoading = true;
      state.error = null;
    },
    [GetBooks.fulfilled]: (state,action) =>{
      state.isLoading = false;
      state.books = action.payload;
    },
    [GetBooks.rejected]: (state,action) =>{
      state.isLoading = false;
      state.error = action.payload;
    },

    //Insert Book
    [insetBooks.pending]: (state,action) =>{
      state.isLoading = true;
      state.error = null;
    },
    [insetBooks.fulfilled]: (state,action) =>{
      state.isLoading = false;
      state.books.push(action.payload);
    },
    [insetBooks.rejected]: (state,action) =>{
      state.isLoading = false;
      state.error = action.payload;
    },

    // Delete Book
    [deleteBooks.pending]: (state,action) =>{
      state.isLoading = true;
      state.error = null;
    },
    [deleteBooks.fulfilled]: (state,action) =>{
      state.isLoading = false;
      state.books = state.books.filter(el => el.id !== action.payload);
      console.log(action);
    },
    [deleteBooks.rejected]: (state,action) =>{
      state.isLoading = false;
      state.error = action.payload;
    },

  }
})


export default bookSlice.reducer;