// src/pages/ProfilePage.jsx
import React, { useEffect, useState } from "react";
import ProfileForm from "../components/User/ProfileForm";
import HistoryTimeline from "../components/User/HistoryTimeline";
import { fetchUserProfile } from "../services/authService";
import { fetchOrderHistory } from "../services/orderService";

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchUserProfile().then(setProfile);
    fetchOrderHistory().then(setHistory);
  }, []);

  if (!profile) return <p>Loading…</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Profile</h1>
      <ProfileForm initialData={profile} />
      <h2 className="mt-8 text-xl font-semibold">
        Purchase & Prescription History
      </h2>
      <HistoryTimeline items={history} />
    </div>
  );
};

export default ProfilePage;
