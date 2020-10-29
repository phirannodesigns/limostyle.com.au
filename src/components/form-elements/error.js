import PropTypes from 'prop-types';
import React from 'react';

function Error({ message }) {
  return (
    <p
      role="alert"
      className="mt-1 text-xs font-medium tracking-widest uppercase text-gold"
    >
      {message}
    </p>
  );
}

Error.propTypes = {
  message: PropTypes.string,
};

export { Error };
