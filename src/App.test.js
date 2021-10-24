import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App Title', () => {
  render(<App />);
  const linkElement = screen.getByText(/My Currency Converter/i);
  expect(linkElement).toBeInTheDocument();
});
