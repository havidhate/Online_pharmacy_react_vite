import React from "react";

function Achievements() {
  const exams = [
    {
      title: "GATE(AIR-3006) – Computer Science",
      year: "2022",
      description:
        "Cleared with strong rank showcasing core understanding of CS fundamentals.",
    },
    {
      title: "UGC NET(AIR-901) – Computer Science",
      year: "2024",
      description:
        "Qualified for Assistant Professorship under UGC with expertise in CS and research.",
    },
    {
      title: "SET – Maharashtra State",
      year: "2024",
      description:
        "Cleared SET demonstrating subject mastery in higher education teaching eligibility.",
    },
  ];

  return (
    <section id="achievements" className="achievements-section fade-in">
      <div className="container">
        <h2 className="section-title">Certifications & Achievements</h2>
        <div className="achievements-grid">
          {exams.map((exam, index) => (
            <div key={index} className="achievement-card">
              <h3>{exam.title}</h3>
              <p className="year">{exam.year}</p>
              <p>{exam.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
