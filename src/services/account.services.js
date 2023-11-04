import axios from 'axios';
import { SERVER_BASE_URL } from './index.js';
import { getAxiosHeaderWithAccessToken } from './auth.helper.js';

export const getMyProfile = async () => {
  const res = await axios.get(`${SERVER_BASE_URL}user/account/me`, getAxiosHeaderWithAccessToken());
  return res.data;
};

export const updateMyPersonalInfo = async ({ email, name }) => {
  const requests = [];
  if (email)
    requests.push(axios.patch(`${SERVER_BASE_URL}user/account/me/email`, { email }, getAxiosHeaderWithAccessToken()));
  if (name)
    requests.push(axios.patch(`${SERVER_BASE_URL}user/account/me/name`, { name }, getAxiosHeaderWithAccessToken()));

  const responses = await Promise.all(requests);

  return responses.map((res) => res.data).reduce((acc, cur) => ({ ...acc, ...cur }), {});
};

export const getMyAddresses = async () => {
  const res = await axios.get(`${SERVER_BASE_URL}user/account/me/address`, getAxiosHeaderWithAccessToken());
  return res.data;
};

export const addMyAddress = async ({
  name,
  addressLine1,
  addressLine2,
  phoneNumber,
  country,
  state,
  district,
  pin,
  landmark,
}) => {
  const res = await axios.post(
    `${SERVER_BASE_URL}user/account/me/address`,
    {
      name,
      address_line_1: addressLine1,
      address_line_2: addressLine2,
      phone_number: phoneNumber,
      country,
      state,
      district,
      pin,
      landmark,
    },
    getAxiosHeaderWithAccessToken(),
  );
  return res.data;
};

export const updateMyAddress = async ({
  id,
  name,
  addressLine1,
  addressLine2,
  phoneNumber,
  country,
  state,
  district,
  pin,
  landmark,
}) => {
  const res = await axios.patch(
    `${SERVER_BASE_URL}user/account/me/address/${id}`,
    {
      name,
      address_line_1: addressLine1,
      address_line_2: addressLine2,
      phone_number: phoneNumber,
      country,
      state,
      district,
      pin,
      landmark,
    },
    getAxiosHeaderWithAccessToken(),
  );
  return res.data;
};

export const deleteMyAddress = async (addressId) => {
  const res = await axios.delete(
    `${SERVER_BASE_URL}user/account/me/address/${addressId}`,
    getAxiosHeaderWithAccessToken(),
  );
  return res.data;
};
