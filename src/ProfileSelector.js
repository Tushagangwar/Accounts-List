import React, { useState } from 'react';
import './ProfileSelector.css'; 

const ProfileSelector = () => {
  const [selectedProfile, setSelectedProfile] = useState('');

  const profiles = [
    { name: 'Personal__Profile ', logo: '' },
    { name: 'Business Profile 1', logo: '' }, 
    { name: 'Business Profile 2', logo: '' },
    { name: 'Business Profile 3', logo: '' },
    { name: 'Business Profile 4', logo: '' },
  ];

  return (
    <div className="profile-selector">
      {profiles.map((profile, index) => (
        <div className="profiles" key={index}>
          <div className="profile">
            <div className="profile_pic"></div>
            {profile.name}
          </div>
          <input
            id={index}
            type="radio"
            name="profile"
            value={profile.name}
            checked={selectedProfile === profile.name}
           
          />
        </div>
      ))}
      <button className="add-account-btn">
        ADD ACCOUNT
      </button>
    </div>
  );
};
export default ProfileSelector;