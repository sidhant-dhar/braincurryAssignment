import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import Button from 'react-bootstrap/button';
import Captcha from '../ReCaptcha/ReCaptcha';
import './FormTemplate.scss';

const FormTemplate = (props) => {
  const { getData, currentStep, fields, validation } = props;
  const [captcha, setCaptcha] = useState(true);
  const getInitialValues = (inputs) => {
    // declare an empty initialValues object
    const initialValues = {};
    // loop over fields array
    // if prop does not exit in the initialValues object,
    // pluck off the name and value props and add it to the initialValues object;
    inputs.forEach((field) => {
      if (!initialValues[field.name]) {
        initialValues[field.name] = field.value;
      }
    });

    // return initialValues object
    return initialValues;
  };

  const renderDate = (input) => {
    return (
      <div key={input.name}>
        <div className='my-4 FormTemplate__input mx-auto'>
          <span className='FormTemplate__inputHeading'>{input.label}</span>
          <Field name={input.name}>
            {(property) => {
              const { field } = property;
              const { errors, touched } = property.form;
              const hasError =
                errors[input.name] && touched[input.name] ? 'FormTemplate__hasError' : '';
              return (
                <>
                  <input className={`form-control ${hasError}`} {...field} type='date' />
                  <span className={hasError ? 'd-block FormTemplate__errors mt-1' : 'd-none'}>
                    {errors[input.name]}
                  </span>
                </>
              );
            }}
          </Field>
        </div>
      </div>
    );
  };

  const renderSelect = (input) => {
    return (
      <Fragment key={input.name}>
        <div className='FormTemplate__input mx-auto my-4'>
          <span className='FormTemplate__inputHeading'>{input.label}</span>

          <Field name={input.name}>
            {(property) => {
              const { field } = property;
              const { errors, touched } = property.form;
              const hasError =
                errors[input.name] && touched[input.name] ? 'FormTemplate__hasError' : '';

              const defaultOption = (
                <option key='default' value={field.value}>
                  {field.value}
                </option>
              );
              const options = input.data.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ));
              const selectOptions = [defaultOption, ...options];
              return (
                <div className='w-100'>
                  <select
                    value={field.value}
                    {...field}
                    className={`FormTemplate__select ${hasError}`}
                  >
                    {selectOptions}
                  </select>
                  <span className={hasError ? 'd-block FormTemplate__errors mt-1' : 'd-none'}>
                    {errors[input.name]}
                  </span>
                </div>
              );
            }}
          </Field>
        </div>
      </Fragment>
    );
  };

  const renderFields = (inputs) => {
    return inputs.map((input) => {
      if (input.type === 'select') {
        return renderSelect(input);
      }

      if (input.type === 'date') {
        return renderDate(input);
      }

      return (
        <div key={input.name}>
          <div className='my-4 FormTemplate__input mx-auto'>
            <span className='FormTemplate__inputHeading'>{input.label}</span>
            <Field name={input.name}>
              {(property) => {
                const { field } = property;
                const { errors, touched } = property.form;
                const hasError =
                  errors[input.name] && touched[input.name] ? 'FormTemplate__hasError' : '';
                return (
                  <>
                    <input className={`form-control ${hasError}`} {...field} type='text' />
                    <span className={hasError ? 'd-block FormTemplate__errors mt-1' : 'd-none'}>
                      {errors[input.name]}
                    </span>
                  </>
                );
              }}
            </Field>
          </div>
        </div>
      );
    });
  };

  const getCaptchaValue = (value) => {
    if (value) setCaptcha(false);
  };

  const initialValues = getInitialValues(fields);

  return (
    <Formik
      onSubmit={(values) => {
        getData(values);
      }}
      validationSchema={validation}
      initialValues={initialValues}
    >
      {(form) => {
        const errorMessageShow = Object.keys(form.errors).length > 0;

        return (
          <div>
            <form onSubmit={form.handleSubmit} className='mb-4'>
              {renderFields(fields)}

              {currentStep === 90 && (
                <div className='d-flex my-3 justify-content-center'>
                  <Captcha captchaVerified={getCaptchaValue} />
                </div>
              )}
              <div className='w-100 text-center mt-md-5'>
                <Button
                  type='submit'
                  variant='customPrimary'
                  disabled={currentStep === 90 ? errorMessageShow || captcha : errorMessageShow}
                >
                  {currentStep === 90 ? 'Submit' : 'Continue'}
                </Button>
              </div>

              {errorMessageShow && (
                <small className='text-danger d-block text-center mt-3'>
                  Please fix all errors to proceed
                </small>
              )}
            </form>
          </div>
        );
      }}
    </Formik>
  );
};

export default FormTemplate;

FormTemplate.propTypes = {
  getData: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
  validation: PropTypes.instanceOf(Object),
  fields: PropTypes.instanceOf(Array).isRequired,
};

FormTemplate.defaultProps = {
  validation: undefined,
};
