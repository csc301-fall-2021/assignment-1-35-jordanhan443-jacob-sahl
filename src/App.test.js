import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import axios from 'axios';

const fakeItems = [{
  item_name: 'Apple',
  item_price: 1.50,
  tax_rate: 0.13
},
{
  item_name: 'Orange',
  item_price: 1.75,
  tax_rate: 0.14
}]

describe('App works', () => {
  test('app renders', () => {
    render(<App />);
    expect(screen.getByText('Store Inventory')).toBeInTheDocument();
    expect(screen.getByText('Your Shopping Cart')).toBeInTheDocument();
  });
})
