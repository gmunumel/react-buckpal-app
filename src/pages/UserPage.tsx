import React, { useEffect } from 'react';
import { Link } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/store';
import { setUsers } from 'store/slices/userSlice';
import { UserList, UserForm } from 'components/User';
import { fetchUsers } from 'services/api/userService';

const UserPage: React.FC = () => {
  const users = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUsers()
      .then((data) => dispatch(setUsers(data)))
      .catch((error) => {
        console.error('Failed to fetch users:', error);
      });
  }, [dispatch]);

  return (
    <div>
      <Link to="/">Back</Link>
      <h1>User Page</h1>
      <UserForm />
      <UserList users={users} />
    </div>
  );
};

export default UserPage;
