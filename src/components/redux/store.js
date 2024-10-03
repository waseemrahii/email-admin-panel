import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import productReducer from './product/productSlice';
import orderReducer from './orderSlice';
import categoryReducer from './categorybrandSlice';
import refundReducer from './refundSlice';
import vendorReducer from './vendorSlice'; // Import your vendor reducer
import brandReducer from './brandSlice'; // Import your vendor reducer
import userReducer from './auth/userSlice'; // Import your vendor reducer
import packageReducer from './auth/packageSlice'; // Import your vendor reducer
import templatesReducer from './auth/templateSlice'; // Import your vendor reducer

const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    vendorOrder: orderReducer,
    category: categoryReducer,
    refund: refundReducer,
    vendor: vendorReducer, // Add your vendor reducer here
    brand: brandReducer, // Add your brand reducer here
    user: userReducer, // Add the user slice to the store
    package: packageReducer,
    templates: templatesReducer,
  },
});

export default store;
