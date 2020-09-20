import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';
import data from './Data';
import Funnel from './Components/Funnel/Funnel';
import './App.scss';

function App() {
  const [currentStep, setCurrentStep] = useState(30);
  const [formData, setData] = useState(data);

  const showResults = () => {
    const result = formData
      .map((e) => e.data)
      .reduce((a, b) => {
        return a.concat(b);
      })
      .map(({ name, type, data, ...elem }) => elem);

    console.log(result);
    alert('Form successfully submitted. Check the console to view the form data!');
  };

  const getFormData = (e, stepper) => {
    const tempData = formData.filter((elem) => {
      return elem.step === stepper;
    });

    const valuesArray = Object.values(e);

    tempData[0].data.forEach((element, i) => {
      element.value = valuesArray[i];
    });

    const mutatedFormData = formData.filter((elem) => {
      return elem.step !== stepper;
    });
    mutatedFormData.push(tempData[0]);
    setData(mutatedFormData);
    setCurrentStep(currentStep !== 90 ? currentStep + 30 : currentStep + 10);

    if (currentStep === 90) {
      showResults();
    }
  };

  const backButton = () => {
    const previousStep = currentStep - 30;
    setCurrentStep(previousStep);
  };

  return (
    <Container fluid className='p-0 m-0 overflow-hidden MainForm'>
      <ProgressBar now={currentStep} />

      <h4 className='MainForm__heading mt-5 text-center'>Football Registration</h4>
      {formData.map((elem) => (
        <Funnel
          data={elem.data}
          heading={elem.heading}
          key={`elem${elem.heading}`}
          step={elem.step}
          currentStep={currentStep}
          formData={getFormData}
          backButton={backButton}
        />
      ))}
    </Container>
  );
}

export default App;
