import React, { useState } from 'react';
import Form from '../components/Form/Form';
import { fetchResponse, fetchHeaders } from '../services/api';
import Display from '../components/Display/Display';

const FormControl = () => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState('');
  const [headers, setHeaders] = useState('');

  const handleChange = ({ target }) => {
    if(target.name === 'url') setUrl(target.value);
    if(target.name === 'method') setMethod(target.value);
    if(target.name === 'body') setBody(target.value);
  };

  const handleSubmit = () => {
    event.preventDefault();
    let requestObject;
    if(method === 'GET' || method === 'DELETE') {
      requestObject = { 
        method: method 
      };
    } else {
      requestObject = { 
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: body
      };
    }
    fetchHeaders(url, requestObject)
      .then(headers => setHeaders(headers));
    fetchResponse(url, requestObject)
      .then(response => setResponse(response));
  };

  return (
    <>
      <Form url={url} method={method} body={body} onChange={handleChange} onSubmit={handleSubmit}/>
      <Display headers={headers} response={response} />
    </>
  );
};

export default FormControl;
