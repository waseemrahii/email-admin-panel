// // emailTemplateSlice.js

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import ApiUrl from '../../../ApiUrl';

// // Initial state for email templates
// const initialState = {
//   templates: [],
//   template: null,
//   status: 'idle',
//   error: null,
// };

// // Async thunk for adding a new email template
// export const addTemplate = createAsyncThunk(
//   'emailTemplate/addTemplate',
//   async (templateData, thunkAPI) => {
//     try {
//       const response = await axios.post(`${ApiUrl}/api/templates`, templateData);
//       return response.data; // Return the created template
//     } catch (error) {
//       return thunkAPI.rejectWithValue('Template creation failed.');
//     }
//   }
// );

// // Async thunk for getting all email templates
// export const getTemplates = createAsyncThunk(
//   'emailTemplate/getTemplates',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get(`${ApiUrl}/api/templates`);
//        console.log("template ", response)
//       return response.data; // Return the list of templates
//     } catch (error) {
//       return thunkAPI.rejectWithValue('Fetching templates failed.');
//     }
//   }
// );

// // Async thunk for getting a template by ID
// export const getTemplateById = createAsyncThunk(
//   'emailTemplate/getTemplateById',
//   async (templateId, thunkAPI) => {
//     try {
//       const response = await axios.get(`${ApiUrl}/api/templates/${templateId}`);
//       return response.data; // Return the template details
//     } catch (error) {
//       return thunkAPI.rejectWithValue('Fetching template details failed.');
//     }
//   }
// );

// // Async thunk for updating a template
// export const updateTemplate = createAsyncThunk(
//   'emailTemplate/updateTemplate',
//   async ({ templateId, templateData }, thunkAPI) => {
//     try {
//       const response = await axios.put(`${ApiUrl}/api/templates/${templateId}`, templateData);
//       return response.data; // Return the updated template
//     } catch (error) {
//       return thunkAPI.rejectWithValue('Template update failed.');
//     }
//   }
// );

// // Async thunk for deleting a template
// export const deleteTemplate = createAsyncThunk(
//   'emailTemplate/deleteTemplate',
//   async (templateId, thunkAPI) => {
//     try {
//       await axios.delete(`${ApiUrl}/api/templates/${templateId}`);
//       return templateId; // Return the deleted template ID to remove it from the state
//     } catch (error) {
//       return thunkAPI.rejectWithValue('Template deletion failed.');
//     }
//   }
// );

// // Email template slice
// const emailTemplateSlice = createSlice({
//   name: 'emailTemplate',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       // Add template
//       .addCase(addTemplate.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.templates.push(action.payload); // Add the new template to the state
//         state.error = null;
//       })
//       .addCase(addTemplate.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload;
//       })
//       // Get all templates
//       .addCase(getTemplates.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.templates = action.payload; // Update templates state
//         state.error = null;
//       })
//       .addCase(getTemplates.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload;
//       })
//       // Get template by ID
//       .addCase(getTemplateById.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.template = action.payload; // Update single template state
//         state.error = null;
//       })
//       .addCase(getTemplateById.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload;
//       })
//       // Update template
//       .addCase(updateTemplate.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         const index = state.templates.findIndex(template => template._id === action.payload._id);
//         if (index !== -1) {
//           state.templates[index] = action.payload; // Update the template in the state
//         }
//         state.error = null;
//       })
//       .addCase(updateTemplate.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload;
//       })
//       // Delete template
//       .addCase(deleteTemplate.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.templates = state.templates.filter(template => template._id !== action.payload); // Remove the deleted template from the state
//         state.error = null;
//       })
//       .addCase(deleteTemplate.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload;
//       });
//   },
// });

// export default emailTemplateSlice.reducer;




import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import ApiUrl from '../../../ApiUrl';

// Initial state for email templates
const initialState = {
  templates: [],
  template: null,
  status: 'idle',
  error: null,
};

// Async thunk for adding a new email template
export const addTemplate = createAsyncThunk(
  'emailTemplate/addTemplate',
  async (templateData, thunkAPI) => {
    try {
      const response = await axios.post(`${ApiUrl}/api/templates`, templateData);
      return response.data; // Return the created template
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data || 'Template creation failed.'); // More detailed error message
    }
  }
);

// Async thunk for getting all email templates
export const getTemplates = createAsyncThunk(
  'emailTemplate/getTemplates',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${ApiUrl}/api/templates`);
      return response.data; // Return the list of templates
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data || 'Fetching templates failed.'); // More detailed error message
    }
  }
);

// Async thunk for updating a template
export const updateTemplate = createAsyncThunk(
  'emailTemplate/updateTemplate',
  async ({ templateId, templateData }, thunkAPI) => {
    try {
      const response = await axios.put(`${ApiUrl}/api/templates/${templateId}`, templateData);
      return response.data; // Return the updated template
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data || 'Template update failed.'); // More detailed error message
    }
  }
);

// Async thunk for deleting a template
export const deleteTemplate = createAsyncThunk(
  'emailTemplate/deleteTemplate',
  async (templateId, thunkAPI) => {
    try {
      await axios.delete(`${ApiUrl}/api/templates/${templateId}`);
      return templateId; // Return the deleted template ID to remove it from the state
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data || 'Template deletion failed.'); // More detailed error message
    }
  }
);

// Email template slice
const emailTemplateSlice = createSlice({
  name: 'emailTemplate',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Add template
      .addCase(addTemplate.fulfilled, (state, action) => {
        state.templates.push(action.payload); // Add the new template to the state
      })
      .addCase(addTemplate.rejected, (state, action) => {
        state.error = action.payload;
      })
      // Get all templates
      .addCase(getTemplates.fulfilled, (state, action) => {
        state.templates = action.payload; // Update templates state
      })
      .addCase(getTemplates.rejected, (state, action) => {
        state.error = action.payload;
      })
      // Update template
      .addCase(updateTemplate.fulfilled, (state, action) => {
        const index = state.templates.findIndex((template) => template.id === action.payload.id);
        if (index !== -1) {
          state.templates[index] = action.payload; // Update the template in the state
        }
      })
      .addCase(updateTemplate.rejected, (state, action) => {
        state.error = action.payload;
      })
      // Delete template
      .addCase(deleteTemplate.fulfilled, (state, action) => {
        state.templates = state.templates.filter((template) => template.id !== action.payload); // Remove the template from the state
      })
      .addCase(deleteTemplate.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

// Exporting the actions and the reducer
export default emailTemplateSlice.reducer;
