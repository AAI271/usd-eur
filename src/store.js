import { configureStore, createSlice } from '@reduxjs/toolkit';

const exchangeRate = 1.07;

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    usd: '',
    eur: ''
  },
  reducers: {
    setUsd: (state, action) => {
      const usd = action.payload;
      const eur = usd ? (parseFloat(usd) / exchangeRate).toFixed(2) : '';
      return { ...state, usd, eur };
    },
    setEur: (state, action) => {
      const eur = action.payload;
      const usd = eur ? (parseFloat(eur) * exchangeRate).toFixed(2) : '';
      return { ...state, usd, eur };
    }
  }
});

export const { setUsd, setEur } = currencySlice.actions;
const store = configureStore({
  reducer: {
    currency: currencySlice.reducer
  }
});

export default store;
