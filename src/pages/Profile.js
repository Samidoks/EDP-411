// src/pages/Profile.js
import React from 'react';

function Profile() {
  // The profile data might come from a context or an API in a real app.
  const dummyProfile = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    major: 'Computer Science'
  };

  return (
    <div className="profile">
      <h2>Your Profile</h2>
      <p><strong>Name:</strong> {dummyProfile.name}</p>
      <p><strong>Email:</strong> {dummyProfile.email}</p>
      <p><strong>Major:</strong> {dummyProfile.major}</p>
    </div>
  );
}

export default Profile;
