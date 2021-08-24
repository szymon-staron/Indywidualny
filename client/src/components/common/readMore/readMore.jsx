import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './readMore.module.scss';

const ReadMore = ({ children, maxCharacterCount = 100, onClick, name }) => {
  const text = children;

  const [isFulltext, setIsFulltext] = useState(true);

  const extand = isFulltext ? 'Rozwiń' : 'Zwiń';

  const resultString = isFulltext ? text.slice(0, maxCharacterCount) : text;

  return (
    <div className={styles.readMore}>
      <span className={styles.text} onClick={onClick} title={name}>
        {resultString}
      </span>
      <span
        className={styles.expand}
        onClick={() => setIsFulltext((prev) => !prev)}
      >
        {extand}
      </span>
    </div>
  );
};
ReadMore.prototype = {
  maxCharacterCount: PropTypes.number,
  onClick: PropTypes.func,
  name: PropTypes.string,
};

export default ReadMore;
