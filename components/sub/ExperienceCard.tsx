import React from "react";

const ExperienceCard = ({ experience }:any) => {
  const { title, company, date, description } = experience;

  return (
    <div className="experience-card">
      <div className="experience-header">
        <h3>{title}</h3>
        <p className="company">{company}</p>
        <p className="date">{date}</p>
      </div>
      <p className="description">{description}</p>
    </div>
  );
};

export default ExperienceCard;
