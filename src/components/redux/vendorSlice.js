// src/slices/vendorSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = `http://localhost:3000/api/vendors/`;


export const createVendor = createAsyncThunk(
    'vendors/createVendor',
    async (vendorData, { rejectWithValue }) => {
      try {
        const response = await axios.post(API_URL, vendorData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
      }
    }
  );
// Thunk for registering a vendor
export const registerVendor = createAsyncThunk(
  'vendors/registerVendor',
  async (vendorData, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      for (const key in vendorData) {
        formData.append(key, vendorData[key]);
      }
      
      const response = await axios.post(`${API_URL}/register`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const vendorSlice = createSlice({
  name: 'vendors',
  initialState: {
    vendors: [],
    loading: false,
    error: null,
  },
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createVendor.pending, (state) => {
        state.loading = true;
      })
      .addCase(createVendor.fulfilled, (state, action) => {
        state.loading = false;
        state.vendors.push(action.payload);
      })
      .addCase(createVendor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(registerVendor.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerVendor.fulfilled, (state, action) => {
        state.loading = false;
        state.vendors.push(action.payload);
      })
      .addCase(registerVendor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetError } = vendorSlice.actions;
export default vendorSlice.reducer;
