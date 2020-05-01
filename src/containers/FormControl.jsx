import React, { useState, useEffect } from 'react';
import Form from '../components/Form/Form';
import Display from '../components/Display/Display';
import List from '../components/List/List';
import { fetchResponse, fetchHeaders } from '../services/api';
import styles from './FormControl.css';

const FormControl = () => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');
  const [headers, setHeaders] = useState({});
  const [response, setResponse] = useState({});
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const storedReqs = JSON.parse(localStorage.getItem('requests'));
    if(storedReqs) setRequests(storedReqs);
  }, []);

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

    // Make hook
    const userRequest = {
      url: url,
      method: method
    };
    const newRequests = [...requests, userRequest];
    setRequests(newRequests);
    localStorage.setItem('requests', JSON.stringify(newRequests));
  };

  const handleClear = () => {
    localStorage.clear();
    setRequests([]);
  };

  return (
    <div className={styles.FormControl}>
      <div className={styles.left}>
        <List requests={requests} handleClear={handleClear}/>
      </div>
      <div className={styles.right}>
        <Form url={url} method={method} body={body} onChange={handleChange} onSubmit={handleSubmit}/>
        <Display headers={headers} response={response} />
      </div>
    </div>
  );
};

export default FormControl;
