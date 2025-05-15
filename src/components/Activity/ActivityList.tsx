import React from 'react';
import { Activity } from 'models';

interface ActivityListProps {
  activities: Activity[];
}

const ActivityList: React.FC<ActivityListProps> = ({ activities }) => {
  return (
    <div>
      <h2>Activities</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.activity_id}>
            Activity ID: {activity.activity_id}, Amount: {activity.money}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityList;
