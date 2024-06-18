import React from 'react';
import './Programs.css';
import yoga1 from '../assets/1.UpaYoga.jpeg';
import yoga2 from '../assets/2.BhutaShuddhi.jpeg';
import yoga3 from '../assets/3.Angarmadana.jpg';
import yoga4 from '../assets/4.SuriyaKriya.jpg';
import yoga5 from '../assets/5.Yogasanas.jpg';
import yoga6 from '../assets/6.Children.jpg';

const programs = [
  { id: 1, title: 'Upa Yoga', description: 'Gentle Yoga, Start Your Journey', image: yoga1 },
  { id: 2, title: 'Bhuta Shuddhi', description: 'Cleansing Yoga, Purification of the Elements', image: yoga2 },
  { id: 3, title: 'Angarmadana', description: 'Fitness Yoga, Complete Mastery of the Limbs', image: yoga3 },
  { id: 4, title: 'Suriya Kriya', description: 'Meditation in Motion, an Acient and Potent Yogic Practice', image: yoga4 },
  { id: 5, title: 'Yogasanas', description: 'Stillness Through Postures, Reach Higher Level of Conciousness', image: yoga5 },
  { id: 6, title: 'Yoga for Children', description: 'Grow with Yoga: Fun, Love, Joy', image: yoga6 },
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
