// import axios from 'axios'

// export function getApiUrl(path = "") {
//   return `${process.env.CMS_API_URL || "http://localhost:1337"}${path}`;
// }

// export function getMedia(media) {
//    console.log("media url is", media.url); 
//   const imageUrl = media.url.startsWith("/")
//       ? getApiUrl(media.url)
//       : media.url;
//    console.log("url is", imageUrl); 
//   return imageUrl;
// }

// const fetchFromCMS = async (path) => {
//   const url = getApiUrl(path);
//   const res = await axios.get(url);
//   return res.data;
// };

// export default fetchFromCMS;
