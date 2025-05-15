import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage, AccountPage, UserPage, ActivityPage } from 'pages';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/accounts" element={<AccountPage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/activities" element={<ActivityPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
