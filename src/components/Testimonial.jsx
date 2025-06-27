import React from 'react';
import './Testimonial.css';

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Beauty Blogger",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Glow and Glam transformed my skincare routine! Highly recommend their products for glowing skin."
  },
  {
    name: "Michael Smith",
    role: "Makeup Artist",
    photo: "https://randomuser.me/api/portraits/men/43.jpg",
    text: "The quality and packaging are top-notch. My clients love Glow and Glam's product range!"
  },
  {
    name: "Samantha Lee",
    role: "Fashion Influencer",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Their products give me confidence every day. Stylish, effective, and affordable."
  }
];

function Testimonial() {
  return (
    <section className="testimonial-section">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-container">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <img src={t.photo} alt={t.name} className="testimonial-photo" />
            <p className="testimonial-text">"{t.text}"</p>
            <p className="testimonial-name">{t.name}</p>
            <p className="testimonial-role">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonial;
