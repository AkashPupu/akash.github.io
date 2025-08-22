import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio header', () => {
  render(<App />);
  const headerElement = screen.getByText(/portfolio/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders hero section', () => {
  render(<App />);
  const heroElement = screen.getByText(/hi, i'm/i);
  expect(heroElement).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(<App />);
  const homeLink = screen.getByText(/home/i);
  const aboutLink = screen.getByText(/about/i);
  const projectsLink = screen.getByText(/projects/i);
  const contactLink = screen.getByText(/contact/i);
  
  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(projectsLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
}); 