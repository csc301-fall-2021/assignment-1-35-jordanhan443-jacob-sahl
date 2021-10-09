import { render, screen } from '@testing-library/react';
import App from './App';
import axios from 'axios';

jest.mock('axios');

describe('App works', () => {
  test('app renders', () => {
    render(<App />);
    expect(screen.getByText('Store Inventory')).toBeInTheDocument();
    expect(screen.getByText('Shopping Cart')).toBeInTheDocument();
  });

  test('items from database are added correctly', () => {
    axios.get.mockResolvedValue({});
  })


})
