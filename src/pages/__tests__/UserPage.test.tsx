import { render, screen } from '@testing-library/react';
import UserPage from 'pages/UserPage';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { MemoryRouter } from 'react-router';

test('renders User Page title', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <UserPage />
      </MemoryRouter>
    </Provider>,
  );
  expect(screen.getByText(/User Page/i)).toBeInTheDocument();
});
