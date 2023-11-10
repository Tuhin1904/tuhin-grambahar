import axios from 'axios';
import { SERVER_BASE_URL } from './index.js';
import { getAxiosHeaderWithAccessToken } from './auth.helper.js';

export const getMyOrders = async () => {
  const res = await axios.get(`${SERVER_BASE_URL}user/account/me/orders`, getAxiosHeaderWithAccessToken());
  return res.data;
};

export const getMyOrderById = async (orderId) => {
  const res = await axios.get(`${SERVER_BASE_URL}user/account/me/order/${orderId}`, getAxiosHeaderWithAccessToken());
  return res.data;
};

export const createMyOrder = async ({ cartId, addressId, paymentMethod }) => {
  const res = await axios.post(
    `${SERVER_BASE_URL}user/account/me/order`,
    {
      address_id: addressId,
      payment_method: paymentMethod || 'prepaid',
      cart_id: cartId,
    },
    getAxiosHeaderWithAccessToken(),
  );
  return res.data;
};
