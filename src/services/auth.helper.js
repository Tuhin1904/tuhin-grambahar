const DEFAULT_AXIOS_HEADER = {
  'Content-Type': 'application/json',
};

export const getAxiosHeaderWithAccessToken = () => {
  const user = localStorage.getItem('user');
  const token = user ? JSON.parse(user).auth : '';
  return {
    ...DEFAULT_AXIOS_HEADER,
    Authorization: `Bearer ${token}`,
  };
};
