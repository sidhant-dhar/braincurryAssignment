import React from 'react';
import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';

const Captcha = (props) => {
  const { captchaVerified } = props;

  const onChange = (value) => {
    captchaVerified(value);
  };

  return <ReCAPTCHA sitekey='6Ld_fM4ZAAAAAEWHF35u24lWQ7TZ1Xy0oajtyX4A' onChange={onChange} />;
};

export default Captcha;

Captcha.propTypes = {
  captchaVerified: PropTypes.func.isRequired,
};
