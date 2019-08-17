import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  copy: PropTypes.object,
};

const defaultProps = {
};

const ErrorPage = (props) => {
  return (
    <div className="container-fluid">
      Loading...
    </div>
  );
};

ErrorPage.defaultProps = defaultProps;
ErrorPage.propTypes = propTypes;

export default ErrorPage;
