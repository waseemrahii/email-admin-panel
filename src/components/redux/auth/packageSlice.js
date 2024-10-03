import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import ApiUrl from '../../../ApiUrl';

// Initial state for packages
const initialState = {
  packages: [],     // For storing multiple packages
  package: null,    // For storing a single package (e.g., get by ID)
  status: 'idle',    // For tracking the loading status
  error: null,      // For handling errors
};

// Async thunk for creating a new package
export const createPackage = createAsyncThunk(
  'package/createPackage',
  async (packageData, thunkAPI) => {
    try {
      const response = await axios.post(`${ApiUrl}/api/packages`, packageData);
      return response.data; // Return the created package
    } catch (error) {
      return thunkAPI.rejectWithValue('Package creation failed.');
    }
  }
);

// Async thunk for getting all packages
export const getAllPackages = createAsyncThunk(
  'package/getAllPackages',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${ApiUrl}/api/packages`);
      return response.data; // Return the list of packages
    } catch (error) {
      return thunkAPI.rejectWithValue('Fetching packages failed.');
    }
  }
);

// Async thunk for getting a package by ID
export const getPackageById = createAsyncThunk(
  'package/getPackageById',
  async (packageId, thunkAPI) => {
    try {
      const response = await axios.get(`${ApiUrl}/api/packages/${packageId}`);
      return response.data; // Return the package details
    } catch (error) {
      return thunkAPI.rejectWithValue('Fetching package details failed.');
    }
  }
);

// Async thunk for updating a package
export const updatePackage = createAsyncThunk(
  'package/updatePackage',
  async ({ packageId, packageData }, thunkAPI) => {
    try {
      const response = await axios.put(`${ApiUrl}/api/packages/${packageId}`, packageData);
      return response.data; // Return the updated package
    } catch (error) {
      return thunkAPI.rejectWithValue('Package update failed.');
    }
  }
);

// Async thunk for deleting a package
export const deletePackage = createAsyncThunk(
  'package/deletePackage',
  async (packageId, thunkAPI) => {
    try {
      await axios.delete(`${ApiUrl}/api/packages/${packageId}`);
      return packageId; // Return the deleted package ID to remove it from the state
    } catch (error) {
      return thunkAPI.rejectWithValue('Package deletion failed.');
    }
  }
);

// Package slice
const packageSlice = createSlice({
  name: 'package',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Create package
      .addCase(createPackage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.packages.push(action.payload); // Add the new package to the state
        state.error = null;
      })
      .addCase(createPackage.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // Get all packages
      .addCase(getAllPackages.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.packages = action.payload; // Update packages state
        state.error = null;
      })
      .addCase(getAllPackages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // Get package by ID
      .addCase(getPackageById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.package = action.payload; // Update single package state
        state.error = null;
      })
      .addCase(getPackageById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // Update package
      .addCase(updatePackage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.packages.findIndex(pkg => pkg._id === action.payload._id);
        if (index !== -1) {
          state.packages[index] = action.payload; // Update the package in the state
        }
        state.error = null;
      })
      .addCase(updatePackage.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // Delete package
      .addCase(deletePackage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.packages = state.packages.filter(pkg => pkg._id !== action.payload); // Remove the deleted package from the state
        state.error = null;
      })
      .addCase(deletePackage.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default packageSlice.reducer;
