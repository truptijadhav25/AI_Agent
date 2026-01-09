// src/services/api.js - 🔥 NO forEach, NO ERRORS, 50 USERS READY
const API_DELAY = 1500;

// ✅ 50 PRE-BUILT USERS - NO GENERATION, NO ERRORS EVER
const MOCK_USERS = [
  {id:1,firstName:"Admin",lastName:"Master",email:"admin@company.com",role:"admin",isActive:true,plan:"enterprise",joined:"2024-01-15",usage:2450,lastActive:"2026-01-09"},
  {id:2,firstName:"Super",lastName:"Admin",email:"superadmin@company.com",role:"admin",isActive:true,plan:"enterprise",joined:"2024-02-01",usage:1890,lastActive:"2026-01-08"},
  {id:3,firstName:"Admin",lastName:"Ops",email:"adminops@company.com",role:"admin",isActive:false,plan:"pro",joined:"2024-03-10",usage:1200,lastActive:"2025-12-15"},
  {id:4,firstName:"Sarah",lastName:"Wilson",email:"sarah.wilson@company.com",role:"agent",isActive:true,plan:"pro",joined:"2024-04-05",usage:3420,lastActive:"2026-01-09"},
  {id:5,firstName:"Mike",lastName:"Johnson",email:"mike.johnson@company.com",role:"agent",isActive:true,plan:"pro",joined:"2024-05-12",usage:2890,lastActive:"2026-01-07"},
  {id:6,firstName:"Lisa",lastName:"Chen",email:"lisa.chen@company.com",role:"agent",isActive:false,plan:"basic",joined:"2024-06-20",usage:1560,lastActive:"2026-01-02"},
  {id:7,firstName:"Robert",lastName:"Taylor",email:"robert.taylor@company.com",role:"agent",isActive:true,plan:"enterprise",joined:"2024-07-08",usage:4120,lastActive:"2026-01-09"},
  {id:8,firstName:"Jennifer",lastName:"Lee",email:"jennifer.lee@company.com",role:"agent",isActive:true,plan:"pro",joined:"2024-08-14",usage:2780,lastActive:"2026-01-06"},
  {id:9,firstName:"James",lastName:"Smith",email:"james.smith@company.com",role:"agent",isActive:true,plan:"pro",joined:"2024-09-22",usage:3340,lastActive:"2026-01-09"},
  {id:10,firstName:"Amy",lastName:"Patel",email:"amy.patel@company.com",role:"agent",isActive:false,plan:"basic",joined:"2024-10-30",usage:890,lastActive:"2025-12-28"},
  {id:11,firstName:"Chris",lastName:"Evans",email:"chris.evans@company.com",role:"agent",isActive:true,plan:"enterprise",joined:"2024-11-15",usage:4560,lastActive:"2026-01-09"},
  {id:12,firstName:"Maria",lastName:"Garcia",email:"maria.garcia@company.com",role:"agent",isActive:true,plan:"pro",joined:"2024-12-01",usage:2670,lastActive:"2026-01-08"},
  {id:13,firstName:"Daniel",lastName:"Kim",email:"daniel.kim@company.com",role:"agent",isActive:true,plan:"pro",joined:"2025-01-18",usage:3120,lastActive:"2026-01-09"},
  {id:14,firstName:"John",lastName:"Doe",email:"john.doe@company.com",role:"user",isActive:true,plan:"basic",joined:"2025-02-10",usage:450,lastActive:"2026-01-09"},
  {id:15,firstName:"Jane",lastName:"Smith",email:"jane.smith@company.com",role:"user",isActive:true,plan:"basic",joined:"2025-03-05",usage:320,lastActive:"2026-01-07"},
  {id:16,firstName:"Emily",lastName:"Davis",email:"emily.davis@company.com",role:"user",isActive:true,plan:"pro",joined:"2025-01-15",usage:1200,lastActive:"2026-01-09"},
  {id:17,firstName:"David",lastName:"Brown",email:"david.brown@company.com",role:"user",isActive:false,plan:"basic",joined:"2025-02-20",usage:890,lastActive:"2026-01-05"},
  {id:18,firstName:"Rachel",lastName:"Green",email:"rachel.green@company.com",role:"user",isActive:true,plan:"enterprise",joined:"2025-03-10",usage:4500,lastActive:"2026-01-09"},
  {id:19,firstName:"Tom",lastName:"Hardy",email:"tom.hardy@company.com",role:"user",isActive:true,plan:"pro",joined:"2025-04-05",usage:2340,lastActive:"2026-01-08"},
  {id:20,firstName:"Emma",lastName:"Watson",email:"emma.watson@company.com",role:"user",isActive:true,plan:"basic",joined:"2025-05-12",usage:670,lastActive:"2026-01-09"},
  {id:21,firstName:"Alex",lastName:"Turner",email:"alex.turner@company.com",role:"user",isActive:false,plan:"pro",joined:"2025-06-18",usage:1890,lastActive:"2026-01-03"},
  {id:22,firstName:"Sophia",lastName:"Rodriguez",email:"sophia.rodriguez@company.com",role:"user",isActive:true,plan:"enterprise",joined:"2025-07-22",usage:3780,lastActive:"2026-01-09"},
  {id:23,firstName:"Mark",lastName:"Thompson",email:"mark.thompson@company.com",role:"user",isActive:true,plan:"basic",joined:"2025-08-14",usage:450,lastActive:"2026-01-07"},
  {id:24,firstName:"Laura",lastName:"Hill",email:"laura.hill@company.com",role:"user",isActive:true,plan:"pro",joined:"2025-09-30",usage:1560,lastActive:"2026-01-09"},
  {id:25,firstName:"Kevin",lastName:"Lee",email:"kevin.lee@company.com",role:"user",isActive:false,plan:"basic",joined:"2025-10-15",usage:230,lastActive:"2025-12-28"},
  {id:26,firstName:"Megan",lastName:"Fox",email:"megan.fox@company.com",role:"user",isActive:true,plan:"enterprise",joined:"2025-11-08",usage:4120,lastActive:"2026-01-09"},
  {id:27,firstName:"Brian",lastName:"Miller",email:"brian.miller@company.com",role:"user",isActive:true,plan:"pro",joined:"2025-12-01",usage:2670,lastActive:"2026-01-08"},
  {id:28,firstName:"Jessica",lastName:"Alba",email:"jessica.alba@company.com",role:"user",isActive:true,plan:"basic",joined:"2025-01-25",usage:890,lastActive:"2026-01-09"},
  {id:29,firstName:"Ryan",lastName:"Gosling",email:"ryan.gosling@company.com",role:"user",isActive:false,plan:"pro",joined:"2025-02-18",usage:1340,lastActive:"2026-01-02"},
  {id:30,firstName:"Natalie",lastName:"Portman",email:"natalie.portman@company.com",role:"user",isActive:true,plan:"enterprise",joined:"2025-03-22",usage:2980,lastActive:"2026-01-09"},
  {id:31,firstName:"Ethan",lastName:"Hawke",email:"ethan.hawke@company.com",role:"user",isActive:true,plan:"basic",joined:"2025-04-15",usage:560,lastActive:"2026-01-07"},
  {id:32,firstName:"Olivia",lastName:"Wilde",email:"olivia.wilde@company.com",role:"user",isActive:true,plan:"pro",joined:"2025-05-20",usage:2230,lastActive:"2026-01-09"},
  {id:33,firstName:"Jake",lastName:"Gyllenhaal",email:"jake.gyllenhaal@company.com",role:"user",isActive:false,plan:"basic",joined:"2025-06-12",usage:780,lastActive:"2026-01-04"},
  {id:34,firstName:"Scarlett",lastName:"Johansson",email:"scarlett.johansson@company.com",role:"user",isActive:true,plan:"enterprise",joined:"2025-07-18",usage:4560,lastActive:"2026-01-09"},
  {id:35,firstName:"Chris",lastName:"Hemsworth",email:"chris.hemsworth@company.com",role:"user",isActive:true,plan:"pro",joined:"2025-08-25",usage:3120,lastActive:"2026-01-08"},
  {id:36,firstName:"Anne",lastName:"Hathaway",email:"anne.hathaway@company.com",role:"user",isActive:true,plan:"basic",joined:"2025-09-10",usage:340,lastActive:"2026-01-09"},
  {id:37,firstName:"Tom",lastName:"Holland",email:"tom.holland@company.com",role:"user",isActive:false,plan:"pro",joined:"2025-10-05",usage:1670,lastActive:"2025-12-30"},
  {id:38,firstName:"Zendaya",lastName:"Coleman",email:"zendaya.coleman@company.com",role:"user",isActive:true,plan:"enterprise",joined:"2025-11-12",usage:3890,lastActive:"2026-01-09"},
  {id:39,firstName:"Timothée",lastName:"Chalamet",email:"timothee.chalamet@company.com",role:"user",isActive:true,plan:"basic",joined:"2025-12-20",usage:920,lastActive:"2026-01-07"},
  {id:40,firstName:"Florence",lastName:"Pugh",email:"florence.pugh@company.com",role:"user",isActive:true,plan:"pro",joined:"2025-01-08",usage:2780,lastActive:"2026-01-09"},
  {id:41,firstName:"Paul",lastName:"Rudd",email:"paul.rudd@company.com",role:"user",isActive:false,plan:"basic",joined:"2025-02-14",usage:450,lastActive:"2026-01-01"},
  {id:42,firstName:"Elizabeth",lastName:"Olsen",email:"elizabeth.olsen@company.com",role:"user",isActive:true,plan:"enterprise",joined:"2025-03-22",usage:4230,lastActive:"2026-01-09"},
  {id:43,firstName:"Sebastian",lastName:"Stan",email:"sebastian.stan@company.com",role:"user",isActive:true,plan:"pro",joined:"2025-04-30",usage:1980,lastActive:"2026-01-08"},
  {id:44,firstName:"Anthony",lastName:"Mackie",email:"anthony.mackie@company.com",role:"user",isActive:true,plan:"basic",joined:"2025-05-15",usage:670,lastActive:"2026-01-09"},
  {id:45,firstName:"Brie",lastName:"Larson",email:"brie.larson@company.com",role:"user",isActive:false,plan:"pro",joined:"2025-06-20",usage:1450,lastActive:"2026-01-03"},
  {id:46,firstName:"Chris",lastName:"Pratt",email:"chris.pratt@company.com",role:"user",isActive:true,plan:"enterprise",joined:"2025-07-25",usage:3670,lastActive:"2026-01-09"},
  {id:47,firstName:"Zoe",lastName:"Saldana",email:"zoe.saldana@company.com",role:"user",isActive:true,plan:"basic",joined:"2025-08-12",usage:890,lastActive:"2026-01-07"},
  {id:48,firstName:"Tom",lastName:"Hiddleston",email:"tom.hiddleston@company.com",role:"user",isActive:true,plan:"pro",joined:"2025-09-18",usage:2340,lastActive:"2026-01-09"},
  {id:49,firstName:"Benedict",lastName:"Cumberbatch",email:"benedict.cumberbatch@company.com",role:"user",isActive:false,plan:"enterprise",joined:"2025-10-22",usage:5120,lastActive:"2026-01-05"},
  {id:50,firstName:"Olivia",lastName:"Cooke",email:"olivia.cooke@company.com",role:"user",isActive:true,plan:"basic",joined:"2025-11-15",usage:780,lastActive:"2026-01-09"}
];

// 🔥 ABSOLUTELY FAIL-SAFE SEARCH - IMPOSSIBLE TO BREAK
export const getAllUsers = async (page = 1, limit = 10, search = "") => {
  await new Promise(resolve => setTimeout(resolve, API_DELAY));
  
  const safeSearch = (search || '').toString().toLowerCase();
  
  const filteredUsers = MOCK_USERS.filter(user => {
    if (!safeSearch) return true;
    
    const safeFirstName = String(user.firstName || '').toLowerCase();
    const safeLastName = String(user.lastName || '').toLowerCase();
    const safeEmail = String(user.email || '').toLowerCase();
    const safeRole = String(user.role || '').toLowerCase();
    
    return safeFirstName.includes(safeSearch) ||
           safeLastName.includes(safeSearch) ||
           safeEmail.includes(safeSearch) ||
           safeRole.includes(safeSearch);
  });

  const totalUsers = filteredUsers.length;
  const totalPages = Math.ceil(totalUsers / limit);
  const startIndex = (page - 1) * limit;
  
  return {
    users: filteredUsers.slice(startIndex, startIndex + limit).map(user => ({
      id: Number(user.id),
      name: `${String(user.firstName || 'Unknown')} ${String(user.lastName || '')}`.trim() || 'Unknown User',
      email: String(user.email || 'no-email@example.com'),
      role: String(user.role || 'user'),
      plan: String(user.plan || 'basic'),
      status: user.isActive ? 'active' : 'paused',
      joined: String(user.joined || 'N/A'),
      usage: Number(user.usage || 0),
      lastActive: String(user.lastActive || 'N/A')
    })),
    totalUsers,
    totalPages,
    currentPage: page,
    limit
  };
};

// ✅ CRUD OPERATIONS
export const toggleUserStatus = async (userId) => {
  await new Promise(resolve => setTimeout(resolve, API_DELAY / 2));
  const userIndex = MOCK_USERS.findIndex(u => u.id === userId);
  if (userIndex !== -1) {
    MOCK_USERS[userIndex].isActive = !MOCK_USERS[userIndex].isActive;
    return MOCK_USERS[userIndex];
  }
  throw new Error("User not found");
};

export const deleteUser = async (userId) => {
  await new Promise(resolve => setTimeout(resolve, API_DELAY / 2));
  const userIndex = MOCK_USERS.findIndex(u => u.id === userId);
  if (userIndex !== -1) {
    MOCK_USERS.splice(userIndex, 1);
    return { success: true };
  }
  throw new Error("User not found");
};

export const createUser = async (userData) => {
  await new Promise(resolve => setTimeout(resolve, API_DELAY));
  if (MOCK_USERS.find(u => u.email === userData.email)) {
    throw new Error("Email already exists");
  }
  const newId = MOCK_USERS.length + 1;
  const newUser = {
    id: newId,
    firstName: String(userData.firstName || 'New'),
    lastName: String(userData.lastName || 'User'),
    email: String(userData.email),
    role: String(userData.role || 'user'),
    isActive: true,
    plan: String(userData.plan || 'basic'),
    joined: new Date().toISOString().split('T')[0],
    usage: 0,
    lastActive: new Date().toISOString().split('T')[0]
  };
  MOCK_USERS.push(newUser);
  return newUser;
};



// Add this to your API services
export const updateUser = async (userId, userData) => {
  const response = await fetch(`/api/users/${userId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  if (!response.ok) throw new Error('Failed to update user');
  return response.json();
};


export const upgradePlan = async (userId, plan) => {
  const response = await fetch(`/api/users/${userId}/plan`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ plan }),
  });
  if (!response.ok) throw new Error('Failed to upgrade plan');
  return response.json();
};
