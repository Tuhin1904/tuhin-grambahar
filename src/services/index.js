export const SERVER_DOMAIN = 'https://api.grambahar.com/';

export const SERVER_BASE_URL = `${SERVER_DOMAIN}v1/`;

export const getAbsImageUrl = (url = '') => {
  if (url) return `${SERVER_DOMAIN}${url.replace(/^\//, '')}`;

  return '';
};
