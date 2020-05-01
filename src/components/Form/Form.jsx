import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

const Form = ({ url, body, onChange, onSubmit }) => (
  <div className={styles.Form}>
    <form onSubmit={onSubmit}>
      <label>API URL:<input type="text" name="url" value={url} onChange={onChange}></input></label> 
      <div>
        <label><input type="radio" name="method" value="GET" onChange={onChange} />GET</label>
        <label><input type="radio" name="method" value="POST" onChange={onChange} />POST</label>
        <label><input type="radio" name="method" value="PUT" onChange={onChange} />PUT</label>
        <label><input type="radio" name="method" value="PATCH" onChange={onChange} />PATCH</label>
        <label><input type="radio" name="method" value="DELETE" onChange={onChange} />DELETE</label>
      </div> 
      <textarea placeholder="Body" name="body" value={body} onChange={onChange}></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
);

Form.propTypes = {
  url: PropTypes.string,
  body: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
};

export default Form;
