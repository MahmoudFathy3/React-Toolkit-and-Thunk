import {createSlice} from '@reduxjs/toolkit';

const ModeSlice = createSlice({
  name: 'Dark',
  initialState: {isDark: false},
  reducers: {
    ToggleMode: (state) =>{
      state.isDark = !state.isDark;
      localStorage.setItem('Dark', state.isDark);
    }
  },
})

export const {ToggleMode} = ModeSlice.actions
export default ModeSlice.reducer;