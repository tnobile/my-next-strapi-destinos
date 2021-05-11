import axios from 'axios'

export function getApiUrl(path = "") {
  return `${process.env.CMS_API_URL || "http://localhost:1337"}${path}`;
}

const fetchFromCMS = async (path) => {
  const url = getApiUrl(`/${path}`);
  const res = await axios.get(url);
  return res.data;
};

export default fetchFromCMS;
