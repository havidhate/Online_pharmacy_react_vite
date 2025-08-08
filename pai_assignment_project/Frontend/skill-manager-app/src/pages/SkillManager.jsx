import { useState, useEffect } from "react";
import api from "../api";

export default function SkillManager() {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState({ name: "", level: 1 });

  const fetchSkills = async () => {
    const res = await api.get("/api/skills/me");
    setSkills(res.data);
  };

  const addSkill = async () => {
    await api.post("/api/skills", newSkill);
    setNewSkill({ name: "", level: 1 });
    fetchSkills();
  };

  const deleteSkill = async (id) => {
    await api.delete(`/api/skills/${id}`);
    fetchSkills();
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <div className="container">
      <h2>Skill Manager</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill._id}>
            {skill.name} (Level {skill.level})
            <button onClick={() => deleteSkill(skill._id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h3>Add Skill</h3>
      <input
        placeholder="Skill Name"
        value={newSkill.name}
        onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
      />
      <input
        type="number"
        min="1"
        max="5"
        value={newSkill.level}
        onChange={(e) => setNewSkill({ ...newSkill, level: e.target.value })}
      />
      <button onClick={addSkill}>Add Skill</button>
    </div>
  );
}
