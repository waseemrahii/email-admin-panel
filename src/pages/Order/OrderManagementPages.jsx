
import React from 'react';
import OrderManagement from './OrderManagement.jsx';

const PendingOrders = () => (
  <OrderManagement status="pending" title="Pending" vendorId="6698bae66affb86b039f18ad" />
);

const ConfirmedOrders = () => (
  <OrderManagement status="confirmed" title="Confirmed" vendorId="6698bae66affb86b039f18ad" />
);

const DeliveredOrders = () => (
  <OrderManagement status="delivered" title="Delivered" vendorId="6698bae66affb86b039f18ad" />
);

const PackagingOrders = () => (
  <OrderManagement status="packaging" title="Packaging" vendorId="6698bae66affb86b039f18ad" />
);

const OutForDeliveryOrders = () => (
  <OrderManagement status="out_for_delivery" title="Out for Delivery" vendorId="6698bae66affb86b039f18ad"/>
);

const FailedToDeliverOrders = () => (
  <OrderManagement status="failed_to_deliver" title="Failed to Deliver" vendorId="6698bae66affb86b039f18ad" />
);

const ReturnedOrders = () => (
  <OrderManagement status="returned" title="Returned" vendorId="6698bae66affb86b039f18ad" />
);

const CanceledOrders = () => (
  <OrderManagement status="canceled" title="Canceled"  vendorId="6698bae66affb86b039f18ad"/>
);

export {
  PendingOrders,
  ConfirmedOrders,
  DeliveredOrders,
  PackagingOrders,
  OutForDeliveryOrders,
  FailedToDeliverOrders,
  ReturnedOrders,
  CanceledOrders
};
