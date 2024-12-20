import React from "react";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <div className="p-6 flex-1">
      <div className="bg-white shadow-md p-4 rounded-md">
        <DashboardCard />
      </div>
    </div>
  );
}

export default Dashboard;
