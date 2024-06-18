import React from 'react';
import './Programs.css';

const programs = [
  { id: 1, title: 'Beginner Yoga', description: 'Start your journey', image: '/assets/yoga1.jpg' },
  { id: 2, title: 'Intermediate Yoga', description: 'Take it to the next level', image: '/assets/yoga2.jpg' },
  { id: 3, title: 'Advanced Yoga', description: 'Master the art', image: '/assets/yoga3.jpg' },
  { id: 4, title: 'Yoga for Stress Relief', description: 'Relax and unwind', image: '/assets/yoga4.jpg' },
  { id: 5, title: 'Yoga for Flexibility', description: 'Enhance your flexibility', image: '/assets/yoga5.jpg' },
  { id: 6, title: 'Yoga for Strength', description: 'Build strength and endurance', image: '/assets/yoga6.jpg' },
];

const Programs = () => {
  return (
    <div className="program-offerings">
      <h2>Our Programs</h2>
      <div className="program-grid">
        {programs.map(program => (
          <div key={program.id} className="program-card">
            <img src={program.image} alt={program.title} />
            <h3>{program.title}</h3>
            <p>{program.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
