import React, { useEffect } from 'react';
import { Link } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/store';
import { setActivities } from 'store/slices/activitySlice';
import { ActivityList } from 'components/Activity';
import { fetchActivities } from 'services/api/activityService';

const ActivityPage: React.FC = () => {
  const activities = useSelector(
    (state: RootState) => state.activities.activities,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    fetchActivities()
      .then((data) => dispatch(setActivities(data)))
      .catch((error) => {
        console.error('Failed to fetch activities:', error);
      });
  }, [dispatch]);

  return (
    <div>
      <Link to="/">Back</Link>
      <h1>Activity Page</h1>
      <ActivityList activities={activities} />
    </div>
  );
};

export default ActivityPage;
