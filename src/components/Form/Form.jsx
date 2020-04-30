import React from 'react';
import styles from './Form.css';

const Form = () => (
  <div className={styles.Form}>
    <form>
      <label>API Url:<input type="text"></input></label> 
      <div>
        <label><input type="radio" name="method" value="get" />GET</label>
        <label><input type="radio" name="method" value="post" />POST</label>
        <label><input type="radio" name="method" value="put" />PUT</label>
        <label><input type="radio" name="method" value="patch" />PATCH</label>
        <label><input type="radio" name="method" value="delete" />DELETE</label>
      </div>
      <textarea placeholder="Body"></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
);

export default Form;
