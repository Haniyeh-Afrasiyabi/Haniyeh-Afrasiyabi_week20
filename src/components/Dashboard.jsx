import React from "react";

function Dashboard() {
  const username = localStorage.getItem("username");
  return (
    <div>
      <h2>👋 {username} سلام </h2>
      <p>به داشبورد خوش آمدید!</p>
    </div>
  );
}

export default Dashboard;
