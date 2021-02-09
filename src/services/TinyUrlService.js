import axios from 'axios';

const TINY_URL_API_KEY = process.env.REACT_APP_TINY_URL_API_KEY;

const setTinyUrlsDefaultHeaders = async () => {
  return {
    headers: {
      'GB-Access-Token': TINY_URL_API_KEY,
    },
  };
};

const getTinyUrls = async (url, options) => {
  const defaultHeaders = await setTinyUrlsDefaultHeaders();
  const urlOptions = options || { ...options, ...defaultHeaders };
  const tinyUrlData = await axios.get(url, urlOptions);
  return tinyUrlData;
};

const createTinyUrls = async (data, url, options) => {
  const defaultHeaders = await setTinyUrlsDefaultHeaders();
  const urlOptions = options || { ...options, ...defaultHeaders };
  const tinyUrlData = await axios.post(url, data, urlOptions).catch((err) => {
    return err.response;
  });
  return tinyUrlData;
};

const deleteTinyUrl = async (url, options) => {
  const defaultHeaders = await setTinyUrlsDefaultHeaders();
  const urlOptions = options || { ...options, ...defaultHeaders };
  const tinyUrlData = await axios.delete(url, urlOptions);
  return tinyUrlData;
};

export { setTinyUrlsDefaultHeaders, getTinyUrls, createTinyUrls, deleteTinyUrl };
