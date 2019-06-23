import React from 'react';
import PropTypes from 'prop-types';
import happiness from '../../assets/images/happiness.svg';
import './index.css';

/**
 * Component funtion el renderizado de la view de auth
 * @param {object} props
 */
const Auth = props => (
  <div className="container auth">
    <div className="row align-items-center">
      <div className="col-12 col-md-6 offset-xl-2 offset-md-1 order-md-2 mb-5 mb-md-0">
        <div className="text-center">
          <img src={happiness} alt="hapiness" className="img-fluid" />
        </div>
      </div>
      <div className="col-12 col-md-5 col-xl-4 order-md-1 my-5">
        {props.children}
      </div>
    </div>
  </div>
);

Auth.propTypes = {
  children: PropTypes.element.isRequired
};

export default Auth;
