import { render, screen } from '@testing-library/react';
import UserList from 'components/User/UserList';
import { User } from 'models';

const users: User[] = [
  {
    user_id: 1,
    name: 'Alice',
    address: {
      street_name: 'Main',
      street_number: 1,
      city: 'Wonderland',
      postal_code: '12345',
      country: 'Fantasy',
    },
    status: 'active',
  },
];

test('renders user names and locations', () => {
  render(<UserList users={users} />);
  expect(screen.getByText(/Alice/)).toBeInTheDocument();
  expect(screen.getByText(/Wonderland, Fantasy/)).toBeInTheDocument();
});
