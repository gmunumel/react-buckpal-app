import { render, screen, fireEvent } from '@testing-library/react';
import UserForm from 'components/User/UserForm';
import { Provider } from 'react-redux';
import { store } from 'store/store';

test('renders form and validates required fields', () => {
  render(
    <Provider store={store}>
      <UserForm />
    </Provider>,
  );
  fireEvent.click(screen.getByText(/Add User/i));
  expect(screen.getByText(/User ID is required/i)).toBeInTheDocument();
});
