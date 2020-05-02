import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.css';

const List = ({ requests, handleClear }) => {
  const requestNodes = requests.map(request => {
    const home = request.url.split('/')[2];
    const user = request.url.split('.com')[1];
    return <li key={request.url}>
      <h3>{request.method}</h3>
      <p>{home}</p>
      <p>{user}</p>
    </li>;
  });

  return (
    <div className={styles.List}>
      <ul>
        {requestNodes}
      </ul>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};

List.propTypes = {
  requests: PropTypes.array,
  handleClear: PropTypes.func,
  handleLoad: PropTypes.func
};

export default List;
