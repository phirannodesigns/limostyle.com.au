import PropTypes from 'prop-types';
import React from 'react';

import { Error } from './error';

function TextArea({
  label,
  name,
  required = true,
  rows = 4,
  register,
  errors,
}) {
  return (
    <div>
      <label htmlFor={name}>
        <div className="relative mt-1 shadow-sm">
          <span className="sr-only">{`${label}${required && ' *'}`}</span>
          <textarea
            id={name}
            name={name}
            rows={rows}
            placeholder={`${label}${required && ' *'}`}
            required={required}
            aria-invalid={!!errors[name]}
            ref={register({
              required: <Error message={`${label} is a required field`} />,
            })}
            className="block w-full px-4 py-3 text-white placeholder-gray-300 placeholder-opacity-50 transition duration-150 ease-in-out bg-black rounded-none form-textarea"
          />
        </div>
      </label>
      {errors[name]?.message}
    </div>
  );
}

TextArea.propTypes = {
  errors: PropTypes.object,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
  rows: PropTypes.number,
};

export { TextArea };
