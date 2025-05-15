import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the BuckPal App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/accounts">Accounts</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/activities">Activities</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
