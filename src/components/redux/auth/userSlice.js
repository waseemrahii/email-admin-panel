import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import ApiUrl from '../../../ApiUrl';

// Initial state for user
const initialState = {
  users: [],        // For storing multiple users
  user: null,       // For storing a single user (e.g., get by ID)
  status: 'idle',   // For tracking the loading status
  error: null,      // For handling errors
};

// Async thunk for signup
export const signup = createAsyncThunk(
  'user/signup',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`${ApiUrl}/api/users/signup`, userData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Signup failed.');
    }
  }
);

// Async thunk for deleting a user
export const deleteUser = createAsyncThunk(
  'user/deleteUser',
  async (userId, thunkAPI) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(`${ApiUrl}/api/users/delete/${userId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return userId; // Return the deleted user ID to remove it from the state
    } catch (error) {
      return thunkAPI.rejectWithValue('User deletion failed.');
    }
  }
);

// Async thunk for getting all users
export const getAllUsers = createAsyncThunk(
  'user/getAllUsers',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${ApiUrl}/api/users`);
      return response.data; // Return the list of users
    } catch (error) {
      return thunkAPI.rejectWithValue('Fetching users failed.');
    }
  }
);

// Async thunk for getting a user by ID
export const getUserById = createAsyncThunk(
  'user/getUserById',
  async (userId, thunkAPI) => {
    try {
      const response = await axios.get(`${ApiUrl}/api/users/${userId}`);
      return response.data; // Return the user details
    } catch (error) {
      return thunkAPI.rejectWithValue('Fetching user details failed.');
    }
  }
);

// Async thunk for updating a subscription
export const updateSubscription = createAsyncThunk(
  'user/updateSubscription',
  async ({ userId, subscriptionId }, thunkAPI) => {
    try {
      const response = await axios.put(`${ApiUrl}/api/users/update-subscription`, {
        userId,
        subscriptionId
      });
      return response.data; // Return the updated user data
    } catch (error) {
      return thunkAPI.rejectWithValue('Updating subscription failed.');
    }
  }
);

// Async thunk for updating SMTP settings
export const updateSMTP = createAsyncThunk(
  'user/updateSMTP',
  async ({ userId, smtpUser, smtpPass }, thunkAPI) => {
    try {
      const response = await axios.put(`${ApiUrl}/api/users/update-smtp`, {
        userId,
        smtpUser,
        smtpPass
      });
      return response.data; // Return the updated user data
    } catch (error) {
      return thunkAPI.rejectWithValue('Updating SMTP settings failed.');
    }
  }
);

// User slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Signup
      .addCase(signup.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // Delete user
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = state.users.filter((user) => user.id !== action.payload);
        state.error = null;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // Get all users
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
        state.error = null;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // Get user by ID
      .addCase(getUserById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.error = null;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // Update subscription
      .addCase(updateSubscription.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.error = null;
      })
      .addCase(updateSubscription.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // Update SMTP settings
      .addCase(updateSMTP.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.error = null;
      })
      .addCase(updateSMTP.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
