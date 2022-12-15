import { useEffect, useState } from "react";

type DashboardData = {
  posts: number;
  likes: number;
  followers: number;
  following: number;
};

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setdashboardData] = useState<DashboardData | null>(
    null
  );

  useEffect(() => {
    async function fetchDashboardData() {
      const response = await fetch("http://localhost:4000/dashboard");
      const data = await response.json();
      setdashboardData(data);
      setIsLoading(false);
    }
    fetchDashboardData();
  }, []);

  if (isLoading) {
    return <h2>Loading ...</h2>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <h2>Posts - {dashboardData?.posts}</h2>
      <h2>likes - {dashboardData?.likes}</h2>
      <h2>followers - {dashboardData?.followers}</h2>
      <h2>following - {dashboardData?.following}</h2>
    </div>
  );
}
