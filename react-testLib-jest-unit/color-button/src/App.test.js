import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('initial conditions', () => {
  render(<App/>);
  let redButton = screen.getByRole('button', {name: 'Change to blue'});
  expect(redButton).toBeEnabled();
  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked();
});

test('checkbox function', () => {
  render(<App/>);
  const button = screen.getByRole('button', {name: 'Change to blue'});
  const checkBox = screen.getByRole('checkbox');
  fireEvent.click(checkBox);
  expect(button).not.toBeEnabled();
  fireEvent.click(checkBox);
  expect(button).toBeEnabled();
});

test('button has correct initial text', () => {
  render(<App/>);
  let redButton = screen.getByRole('button', {name: 'Change to blue'});
  expect(redButton).toBeInTheDocument();
});

test('button changes to blue when clicked', () => {
  render(<App/>);
  let redButton = screen.getByRole('button', {name: 'Change to blue'});
  fireEvent.click(redButton);
  expect(redButton).toHaveStyle({backgroundColor: 'blue'});
});
