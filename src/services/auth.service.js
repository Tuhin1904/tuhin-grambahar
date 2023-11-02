import axios from 'axios';
import { SERVER_BASE_URL } from './index.js';

export const sendLoginOtp = async(phoneNumber) => {
    const res = await axios.post(`${SERVER_BASE_URL}auth/login/request-otp`, {
        phone_number: phoneNumber,
    });
    return res.data;
};

export const verifyLoginOtp = async(phoneNumber, otp) => {
    const res = await axios.post(`${SERVER_BASE_URL}auth/login/verify-otp`, {
        phone_number: phoneNumber,
        otp,
    });
    return res.data;
};