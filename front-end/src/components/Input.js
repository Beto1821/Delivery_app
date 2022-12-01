import React from 'react';
import PropTypes from 'prop-types';

function GenericInput({
  testId,
  type,
  input,
  name,
  placeholder,
  setter,
  selector,
  fieldName }) {
  return (
    <label htmlFor={ selector }>
      { fieldName }
      <input
        data-testid={ testId }
        type={ type }
        value={ input }
        fieldname={ name }
        placeholder={ placeholder }
        onChange={ (event) => setter(event.target.value) }
      />
    </label>
  );
}

GenericInput.defaultProps = {
  setter: () => {},
};

GenericInput.propTypes = {
  testId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  setter: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  selector: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
};

export default GenericInput;
