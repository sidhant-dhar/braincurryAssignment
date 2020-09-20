import * as Yup from 'yup';

const alphaNumeric = /^[a-zA-Z0-9\s]+$/;
const zipcode = /^\d{6}$/;
const name = /^[a-z ,.'-]+$/i;
const telephone = /[2-9]{2}\d{8}/;
const numbers = /^0*(?:[1-4][0-9]?|50)$/;
export const validation30 = Yup.object().shape({
  TeamName: Yup.string()
    .matches(alphaNumeric, { message: 'Enter Valid Team Name', excludeEmptyString: true })
    .required()
    .max(35),

  Location: Yup.string()
    .required()
    .max(6)
    .matches(zipcode, { message: 'Please Enter a 6 digit pincode' }),

  TotalNumber: Yup.string()
    .required()
    .matches(numbers, { message: 'Please enter numbers between 1 and 50 only' }),

  CaptainName: Yup.string().required().max(35).matches(name, { message: 'Enter a Valid Name' }),
});

export const validation60 = Yup.object().shape({
  date: Yup.string().required(),

  Experience: Yup.string().required(),
});

export const validation90 = Yup.object().shape({
  Name: Yup.string().required().max(35).matches(name, { message: 'Enter a Valid Name' }),
  Email: Yup.string().required().email(),
  Telephone: Yup.string()
    .required()
    .matches(telephone, { message: 'Enter a Valid Telephone Number' }),
});
