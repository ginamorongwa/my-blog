import { timesTwo } from "./functions";

// name of the test, what should be tested
test("Multiplies by two", () => {
    expect(timesTwo(4)).toBe(8);
})

// deleted: App.test.js
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });