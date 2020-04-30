export const fetchResponse = (url, request) => {
  return fetch(url, request)
    .then(res => res.json());
};
