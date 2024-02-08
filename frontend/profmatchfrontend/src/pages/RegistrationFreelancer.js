import React from 'react'
import { useState } from 'react';

export default function RegistrationFreelancer() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [education, setEducation] = useState('');
    const [experience, setExperience] = useState('');
    const [password, setPassword] = useState('');
    const [resume, setResume] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission here
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" id="freelancerName" name="freelancerName" placeholder="freelancer name" value={name} onChange={(e) => setName(e.target.value)} required/>
        </label>
        <label>
          Email:
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Education:
          <textarea value={education} onChange={(e) => setEducation(e.target.value)} />
        </label>
        <label>
          Experience:
          <textarea value={experience} onChange={(e) => setExperience(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>
          Resume:
          <input type="file" onChange={(e) => setResume(e.target.files[0])} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      );
}
