import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { validation30, validation60, validation90 } from '../Form/Validation';
import FormTemplate from '../Form/FormTemplate';
import './Funnel.scss';

const Funnel = (props) => {
  const { currentStep, step, heading, data, formData, backButton } = props;
  const [validation, setValidation] = useState();

  useEffect(() => {
    if (currentStep === 30) setValidation(validation30);
    else if (currentStep === 60) setValidation(validation60);
    else if (currentStep === 90) setValidation(validation90);
  }, [currentStep]);

  const getData = (e) => {
    formData(e, step);
  };

  if (currentStep !== step) {
    return null;
  }

  return (
    <div className='Funnel'>
      <Button
        className={step === 30 ? 'd-none' : 'Funnel__backButton'}
        onClick={() => backButton()}
        variant='backButton'
      >
        {`<-- Back`}
      </Button>
      <p className='Funnel__heading text-center my-4 my-md-5'>{heading}</p>

      <FormTemplate
        fields={data}
        validation={validation}
        getData={getData}
        currentStep={currentStep}
      />
    </div>
  );
};

export default Funnel;

Funnel.propTypes = {
  currentStep: PropTypes.number.isRequired,
  data: PropTypes.instanceOf(Array).isRequired,
  formData: PropTypes.func.isRequired,
  backButton: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  heading: PropTypes.string.isRequired,
};
