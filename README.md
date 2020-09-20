This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# BrainCurry - Coding Assignment

## Brief

A three step funnel based registration form in which the user can go to the next step only after filling up details in previous form, So on each step we need to have validation for each input field that the correct value has been entered in fields.

## Solution

The solution has been built to be as dynamic as possible, with all data for rendering the forms in the data.js file. Validation is handled using Yup while the forms have been built using Formik.

Each step in the form is a separate form, and the final output flattens all data into a single array. This helps us in easily adding as many sections as we want, with only changes required in the progress bar and all calculations that depend on it. Each individual form can also be customised.

I am using AirBnb's styling guide to lint my code, and prettier to format it. Husky runs a pre commit hook to ensure the code committed is upto the mark.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
