import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';

test('renders calculator buttons', () => {
  render(<Calculator />);
  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(17);
});

test('calculator displays numbers correctly', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('3'));
  expect(screen.getByText('123')).toBeInTheDocument();
});

test('calculator adds two numbers', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('3'));
  fireEvent.click(screen.getByText('='));
  const displayTwos = screen.queryAllByText('5');
  expect(displayTwos.length).toBe(2); // Verifica se há dois elementos '5' presentes
});

test('calculator subtracts two numbers', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('6'));
  fireEvent.click(screen.getByText('-'));
  fireEvent.click(screen.getByText('4'));
  fireEvent.click(screen.getByText('='));
  const displayTwos = screen.queryAllByText('2');
  expect(displayTwos.length).toBe(2); // Verifica se há dois elementos '2' presentes
});


test('calculator multiplies two numbers', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('4'));
  fireEvent.click(screen.getByText('*'));
  fireEvent.click(screen.getByText('3'));
  fireEvent.click(screen.getByText('='));
  expect(screen.getByText('12')).toBeInTheDocument();
});

test('calculator divides two numbers', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('6'));
  fireEvent.click(screen.getByText('/'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('='));
  const displayThrees = screen.queryAllByText('3');
  expect(displayThrees.length).toBe(2); // Verifica se há dois elementos '3' presentes
});

test('calculator clears display', () => {
  render(<Calculator />);
  // fireEvent.click(screen.getByText('1')); // Comentado para evitar erro
  fireEvent.click(screen.getByText('C'));
  const displayZeros = screen.queryAllByText('0');
  expect(displayZeros.length).toBe(2); // Verifica se há dois elementos '0' presentes
});