export const fetchResponse = (url, request) => {
  return fetch(url, request)
    .then(res => res.json());
};

export const fetchHeaders = (url, request) => {
  return fetch(url, request)
    .then(res => {
      let headers = {};
      for(let header of res.headers.entries()) {
        headers[header[0]] = header[1];
      }
      return headers;
    });
};
