import React from 'react';
import { User } from 'models';

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.user_id}>
            {user.name} - {user.address.city}, {user.address.country}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
