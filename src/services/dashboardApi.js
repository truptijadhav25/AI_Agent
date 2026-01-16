// src/services/dashboardApi.js
const API_DELAY = 1000;

// Mock dashboard data (replace with real API calls)
export const getDashboardStats = async () => {
  await new Promise(resolve => setTimeout(resolve, API_DELAY));
  return {
    totalChats: 1245,
    avgResponseTime: "2m 15s",
    satisfaction: 4.8,
    activeSessions: 23,
    chartData: { series: [65, 25, 10] },
    trends: [
      { month: 'Jan', value: 245 },
      { month: 'Feb', value: 320 },
      { month: 'Mar', value: 410 }
    ]
  };
};

export const getUsageHistory = async () => {
  await new Promise(resolve => setTimeout(resolve, API_DELAY));
  return [
    { date: "Jan 8", chats: 245, limit: 1000, status: "24%", cost: "$12.50" },
    { date: "Jan 7", chats: 189, limit: 1000, status: "19%", cost: "$9.45" },
    { date: "Jan 6", chats: 312, limit: 1000, status: "31%", cost: "$15.60" }
  ];
};

export const getRecentActivity = async () => {
  await new Promise(resolve => setTimeout(resolve, API_DELAY));
  return [
    { time: "14:32", type: "Chat", customer: "John D.", status: "Resolved" },
    { time: "13:15", type: "Voice", customer: "Sarah K.", status: "Pending" }
  ];
};

export const getBillingData = async () => {
  await new Promise(resolve => setTimeout(resolve, API_DELAY));
  return [
    { invoice: "#INV-001", date: "Jan 1", amount: 49, status: "Paid" },
    { invoice: "#INV-002", date: "Dec 1", amount: 49, status: "Paid" }
  ];
};

// Update main api.js
export const getCurrentUser = async () => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const token = localStorage.getItem('token');
  if (!token) return null;
  
  const userData = localStorage.getItem('user');
  return userData ? JSON.parse(userData) : null;
};
