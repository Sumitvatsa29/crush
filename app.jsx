// App.js

import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [preferences, setPreferences] = useState({
    gender: '',
    minAge: '',
    maxAge: '',
  });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users', {
        name,
        gender,
        age,
        preferences,
      });
      alert('User created successfully');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div>
      <h1>College Love Matcher</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Gender"
          value={gender}
          onChange={e => setGender(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
        <h2>Preferences</h2>
        <input
          type="text"
          placeholder="Preferred Gender"
          value={preferences.gender}
          onChange={e =>
            setPreferences({ ...preferences, gender: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Minimum Age"
          value={preferences.minAge}
          onChange={e =>
            setPreferences({ ...preferences, minAge: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Maximum Age"
          value={preferences.maxAge}
          onChange={e =>
            setPreferences({ ...preferences, maxAge: e.target.value })
          }
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
