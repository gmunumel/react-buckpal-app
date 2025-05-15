import userReducer, { setUsers, addUser } from 'store/slices/userSlice';
import { User } from 'models';

const initialState = { users: [] as User[] };

test('should handle setUsers', () => {
  const users = [
    {
      user_id: 1,
      name: 'Test',
      address: {
        street_name: '',
        street_number: 0,
        city: '',
        postal_code: '',
        country: '',
      },
      status: 'active',
    },
  ];
  const state = userReducer(initialState, setUsers(users));
  expect(state.users).toHaveLength(1);
  expect(state.users[0].name).toBe('Test');
});

test('should handle addUser', () => {
  const user = {
    user_id: 2,
    name: 'Another',
    address: {
      street_name: '',
      street_number: 0,
      city: '',
      postal_code: '',
      country: '',
    },
    status: 'active',
  };
  const state = userReducer(initialState, addUser(user));
  expect(state.users[0].name).toBe('Another');
});
