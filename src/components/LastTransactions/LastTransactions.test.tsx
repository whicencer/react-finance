import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import { LastTransactions } from '.';

describe('LastTransactions Component', () => {
  render(<LastTransactions />);

  test('Popup should open on button click', () => {
    const button = screen.getByTestId('button');

    fireEvent.click(button);

    expect(screen.getByText('Add transaction popup')).toBeInTheDocument();
  });
});