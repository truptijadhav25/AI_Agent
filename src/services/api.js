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


// export const getAllBots = (page, limit, search) => 
//   api.get(`/bots?page=${page}&limit=${limit}&search=${search}`);

// export const createBot = (botData) => 
//   api.post('/bots', botData);

// export const updateBot = (id, botData) => 
//   api.put(`/bots/${id}`, botData);

// export const deleteBot = (id) => 
//   api.delete(`/bots/${id}`);

// export const trainBot = (id) => 
//   api.post(`/bots/${id}/train`);

// export const publishBot = (id) => 
//   api.post(`/bots/${id}/publish`);

// export const rollbackBot = (id) => 
//   api.post(`/bots/${id}/rollback`);

// export const toggleVoice = (id, enabled) => 
//   api.patch(`/bots/${id}/voice`, { voiceEnabled: enabled });

// src/services/api.js - 🔥 COMPLETE BOTS MOCK DATA (Lines 170+ FIXED)

// ✅ 12 PRODUCTION-READY DUMMY BOTS
const MOCK_BOTS = [
  {id:1,name:"Customer Support Bot",status:"live",sessions:2847,version:"v2.1",voiceEnabled:true,created:"2026-01-01",channel:"web"},
  {id:2,name:"Sales Assistant",status:"training",sessions:1562,version:"v1.8",voiceEnabled:false,created:"2026-01-03",channel:"whatsapp"},
  {id:3,name:"FAQ Helper",status:"draft",sessions:892,version:"v1.0",voiceEnabled:true,created:"2026-01-05",channel:"telegram"},
  {id:4,name:"Order Tracker",status:"live",sessions:4231,version:"v3.2",voiceEnabled:false,created:"2025-12-15",channel:"web"},
  {id:5,name:"Booking Assistant",status:"live",sessions:1987,version:"v2.4",voiceEnabled:true,created:"2026-01-02",channel:"phone"},
  {id:6,name:"Tech Support Bot",status:"training",sessions:2345,version:"v1.9",voiceEnabled:false,created:"2026-01-04",channel:"web"},
  {id:7,name:"HR Assistant",status:"draft",sessions:456,version:"v1.1",voiceEnabled:true,created:"2026-01-06",channel:"slack"},
  {id:8,name:"Marketing Bot",status:"live",sessions:5123,version:"v3.0",voiceEnabled:true,created:"2025-12-20",channel:"whatsapp"},
  {id:9,name:"Feedback Collector",status:"training",sessions:1789,version:"v2.0",voiceEnabled:false,created:"2026-01-07",channel:"web"},
  {id:10,name:"Survey Bot",status:"live",sessions:3214,version:"v2.3",voiceEnabled:true,created:"2026-01-08",channel:"telegram"},
  {id:11,name:"Appointment Booker",status:"draft",sessions:234,version:"v1.0",voiceEnabled:false,created:"2026-01-09",channel:"phone"},
  {id:12,name:"Returns Handler",status:"live",sessions:2890,version:"v1.5",voiceEnabled:true,created:"2025-12-28",channel:"web"}
];

// ✅ FAIL-SAFE BOTS SEARCH (Same pattern as Users)
export const getAllBots = async (page = 1, limit = 12, search = "") => {
  await new Promise(resolve => setTimeout(resolve, API_DELAY));
  
  const safeSearch = (search || '').toString().toLowerCase();
  
  const filteredBots = MOCK_BOTS.filter(bot => {
    if (!safeSearch) return true;
    
    const safeName = String(bot.name || '').toLowerCase();
    const safeStatus = String(bot.status || '').toLowerCase();
    const safeChannel = String(bot.channel || '').toLowerCase();
    
    return safeName.includes(safeSearch) ||
           safeStatus.includes(safeSearch) ||
           safeChannel.includes(safeSearch);
  });

  const totalBots = filteredBots.length;
  const totalPages = Math.ceil(totalBots / limit);
  const startIndex = (page - 1) * limit;
  
  return {
    bots: filteredBots.slice(startIndex, startIndex + limit).map(bot => ({
      id: Number(bot.id),
      name: String(bot.name || 'Unknown Bot'),
      status: String(bot.status || 'draft'),
      sessions: Number(bot.sessions || 0),
      version: String(bot.version || 'v1.0'),
      voiceEnabled: Boolean(bot.voiceEnabled),
      created: String(bot.created || 'N/A'),
      channel: String(bot.channel || 'web')
    })),
    totalBots,
    totalPages,
    currentPage: page,
    limit
  };
};

// ✅ BOTS CRUD OPERATIONS (Mock - Same pattern)
export const createBot = async (botData) => {
  await new Promise(resolve => setTimeout(resolve, API_DELAY));
  if (MOCK_BOTS.find(b => b.name === botData.name)) {
    throw new Error("Bot name already exists");
  }
  const newId = MOCK_BOTS.length + 1;
  const newBot = {
    id: newId,
    name: String(botData.name || 'New Bot'),
    status: "draft",
    sessions: 0,
    version: "v1.0",
    voiceEnabled: false,
    created: new Date().toISOString().split('T')[0],
    channel: "web"
  };
  MOCK_BOTS.push(newBot);
  return newBot;
};

export const deleteBot = async (botId) => {
  await new Promise(resolve => setTimeout(resolve, API_DELAY / 2));
  const botIndex = MOCK_BOTS.findIndex(b => b.id === botId);
  if (botIndex !== -1) {
    MOCK_BOTS.splice(botIndex, 1);
    return { success: true };
  }
  throw new Error("Bot not found");
};

export const trainBot = async (botId) => {
  await new Promise(resolve => setTimeout(resolve, API_DELAY));
  const botIndex = MOCK_BOTS.findIndex(b => b.id === botId);
  if (botIndex !== -1) {
    MOCK_BOTS[botIndex].status = "training";
    return MOCK_BOTS[botIndex];
  }
  throw new Error("Bot not found");
};

export const publishBot = async (botId) => {
  await new Promise(resolve => setTimeout(resolve, API_DELAY));
  const botIndex = MOCK_BOTS.findIndex(b => b.id === botId);
  if (botIndex !== -1) {
    MOCK_BOTS[botIndex].status = "live";
    MOCK_BOTS[botIndex].version = `v${parseInt(MOCK_BOTS[botIndex].version[1]) + 1}.0`;
    return MOCK_BOTS[botIndex];
  }
  throw new Error("Bot not found");
};

export const rollbackBot = async (botId) => {
  await new Promise(resolve => setTimeout(resolve, API_DELAY / 2));
  const botIndex = MOCK_BOTS.findIndex(b => b.id === botId);
  if (botIndex !== -1) {
    MOCK_BOTS[botIndex].status = "draft";
    return MOCK_BOTS[botIndex];
  }
  throw new Error("Bot not found");
};

export const toggleVoice = async (botId, enabled) => {
  await new Promise(resolve => setTimeout(resolve, API_DELAY / 2));
  const botIndex = MOCK_BOTS.findIndex(b => b.id === botId);
  if (botIndex !== -1) {
    MOCK_BOTS[botIndex].voiceEnabled = enabled;
    return MOCK_BOTS[botIndex];
  }
  throw new Error("Bot not found");
};

export const updateBot = async (botId, botData) => {
  await new Promise(resolve => setTimeout(resolve, API_DELAY));
  const botIndex = MOCK_BOTS.findIndex(b => b.id === botId);
  if (botIndex !== -1) {
    MOCK_BOTS[botIndex] = { ...MOCK_BOTS[botIndex], ...botData };
    return MOCK_BOTS[botIndex];
  }
  throw new Error("Bot not found");
};




// performace 
// 🔥 src/services/api.js - 1000 REALISTIC SESSION SAMPLES FOR PERFORMANCE DASHBOARD
// Production-ready mock data for AI Agent performance tracking


const MOCK_AI_AGENTS = [
  // 🔥 TOP PERFORMERS (1-10)
  { id: 1, name: "Customer Support Bot", channel: "web", status: "live", sessions: 2847, csat: 94.2 },
  { id: 2, name: "Sales Assistant v2", channel: "whatsapp", status: "live", sessions: 1562, csat: 91.8 },
  { id: 3, name: "FAQ Helper Pro", channel: "telegram", status: "live", sessions: 892, csat: 96.5 },
  { id: 4, name: "Order Tracker Pro", channel: "web", status: "live", sessions: 4231, csat: 95.7 },
  { id: 5, name: "Booking Assistant", channel: "phone", status: "live", sessions: 1987, csat: 93.4 },
  { id: 6, name: "Tech Support Bot", channel: "web", status: "training", sessions: 2345, csat: 92.1 },
  { id: 7, name: "HR Assistant Pro", channel: "slack", status: "live", sessions: 456, csat: 97.2 },
  { id: 8, name: "Marketing Bot v3", channel: "whatsapp", status: "live", sessions: 5123, csat: 94.8 },
  { id: 9, name: "Feedback Collector", channel: "web", status: "live", sessions: 1789, csat: 95.3 },
  { id: 10, name: "Survey Bot Pro", channel: "telegram", status: "live", sessions: 3214, csat: 93.9 },

  // 🔥 SUPPORT & OPERATIONS (11-20)
  { id: 11, name: "Returns Handler v2", channel: "web", status: "live", sessions: 2890, csat: 94.6 },
  { id: 12, name: "Password Reset Bot", channel: "web", status: "live", sessions: 5678, csat: 98.1 },
  { id: 13, name: "Billing Helper Pro", channel: "email", status: "live", sessions: 3421, csat: 92.7 },
  { id: 14, name: "Lead Qualifier v2", channel: "whatsapp", status: "live", sessions: 1890, csat: 93.2 },
  { id: 15, name: "Support Triage Bot", channel: "all", status: "live", sessions: 6789, csat: 96.2 },
  { id: 16, name: "FAQ Bot v2", channel: "web", status: "training", sessions: 1234, csat: 94.5 },
  { id: 17, name: "Order Status Bot", channel: "telegram", status: "live", sessions: 4567, csat: 95.8 },
  { id: 18, name: "Returns Assistant", channel: "web", status: "live", sessions: 2100, csat: 93.9 },
  { id: 19, name: "Tech Support v2", channel: "web", status: "draft", sessions: 1456, csat: 91.3 },
  { id: 20, name: "Account Manager", channel: "email", status: "live", sessions: 987, csat: 96.8 },

  // 🔥 SALES & MARKETING (21-30)
  { id: 21, name: "Lead Nurture Bot", channel: "whatsapp", status: "live", sessions: 2345, csat: 92.4 },
  { id: 22, name: "Demo Booker Pro", channel: "web", status: "live", sessions: 1789, csat: 94.1 },
  { id: 23, name: "Upsell Assistant", channel: "telegram", status: "live", sessions: 1567, csat: 93.7 },
  { id: 24, name: "Cart Recovery Bot", channel: "web", status: "live", sessions: 3890, csat: 95.2 },
  { id: 25, name: "Promotion Bot", channel: "whatsapp", status: "live", sessions: 2678, csat: 92.9 },
  { id: 26, name: "Referral Generator", channel: "email", status: "training", sessions: 890, csat: 94.3 },
  { id: 27, name: "Cross-sell Bot", channel: "web", status: "live", sessions: 3124, csat: 93.6 },
  { id: 28, name: "Pricing Helper", channel: "telegram", status: "live", sessions: 1456, csat: 95.1 },
  { id: 29, name: "Trial Extension", channel: "email", status: "live", sessions: 1234, csat: 96.4 },
  { id: 30, name: "Win-back Bot", channel: "whatsapp", status: "live", sessions: 2100, csat: 91.8 },

  // 🔥 OPERATIONS & UTILITY (31-40)
  { id: 31, name: "Shipping Tracker", channel: "web", status: "live", sessions: 4567, csat: 97.2 },
  { id: 32, name: "Inventory Checker", channel: "telegram", status: "live", sessions: 2890, csat: 94.8 },
  { id: 33, name: "Stock Alert Bot", channel: "whatsapp", status: "live", sessions: 1789, csat: 95.6 },
  { id: 34, name: "Delivery ETA Bot", channel: "web", status: "live", sessions: 3456, csat: 96.1 },
  { id: 35, name: "Refund Processor", channel: "email", status: "live", sessions: 2345, csat: 93.4 },
  { id: 36, name: "Cancellation Bot", channel: "web", status: "live", sessions: 1678, csat: 92.7 },
  { id: 37, name: "Subscription Helper", channel: "email", status: "live", sessions: 2890, csat: 95.3 },
  { id: 38, name: "Payment Retry Bot", channel: "web", status: "live", sessions: 4567, csat: 94.9 },
  { id: 39, name: "Invoice Generator", channel: "email", status: "live", sessions: 1234, csat: 97.1 },
  { id: 40, name: "Tax Calculator", channel: "web", status: "draft", sessions: 890, csat: 93.2 },

  // 🔥 ENTERPRISE & SPECIALIZED (41-50)
  { id: 41, name: "Compliance Bot", channel: "slack", status: "live", sessions: 567, csat: 98.5 },
  { id: 42, name: "Legal Assistant", channel: "email", status: "live", sessions: 345, csat: 97.8 },
  { id: 43, name: "Contract Reviewer", channel: "web", status: "training", sessions: 234, csat: 96.4 },
  { id: 44, name: "Audit Assistant", channel: "slack", status: "live", sessions: 678, csat: 98.2 },
  { id: 45, name: "Risk Analyzer", channel: "web", status: "live", sessions: 1234, csat: 95.7 },
  { id: 46, name: "Fraud Detector", channel: "all", status: "live", sessions: 4567, csat: 94.3 },
  { id: 47, name: "KYC Verifier", channel: "web", status: "live", sessions: 2890, csat: 96.9 },
  { id: 48, name: "Onboarding Bot", channel: "email", status: "live", sessions: 1789, csat: 95.4 },
  { id: 49, name: "ESG Reporter", channel: "slack", status: "live", sessions: 567, csat: 97.6 },
  { id: 50, name: "Executive Summary", channel: "email", status: "live", sessions: 345, csat: 98.9 }
];

console.log('✅ 50 AI AGENTS LOADED:', MOCK_AI_AGENTS.length);


// ✅ 1000 SESSION SAMPLES - Realistic customer service interactions
const MOCK_SESSIONS = Array.from({ length: 1000 }, (_, index) => {
  const agentIds = [1,2,3,4,5,6,7,8,9,10,11,12]; // Your 50 AI agents
  const channels = ['web', 'whatsapp', 'telegram', 'phone', 'email', 'slack'];
  const types = ['Call', 'Chat', 'Email', 'Ticket', 'FAQ'];
  const outcomes = ['Resolved', 'Escalated', 'Pending', 'Closed'];
  
  const startTime = new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000); // Last 30 days
  const duration = Math.random() * 1800 + 60; // 1-30 minutes in seconds
  
  return {
    id: index + 1,
    sessionId: `sess_${Date.now() - Math.random() * 1000000}_${index}`,
    agentId: agentIds[Math.floor(Math.random() * agentIds.length)],
    agentName: MOCK_AI_AGENTS[Math.floor((index % 12))]?.name || 'AI Agent',
    channel: channels[Math.floor(Math.random() * channels.length)],
    type: types[Math.floor(Math.random() * types.length)],
    customerName: `Customer ${index + 1}`,
    customerId: `cust_${Math.floor(Math.random() * 5000) + 1}`,
    startTime: startTime.toISOString(),
    endTime: new Date(startTime.getTime() + duration * 1000).toISOString(),
    duration: Math.round(duration), // seconds
    aht: `${Math.floor(duration / 60)}m ${duration % 60}s`,
    messages: Math.floor(Math.random() * 15) + 3, // 3-18 messages
    csat: Math.floor((Math.random() * 30 + 70) * 10) / 10, // 70-100%
    resolution: Math.random() > 0.15, // 85% resolution rate
    fcr: Math.random() > 0.25, // 75% First Contact Resolution
    escalation: Math.random() > 0.85, // 15% escalation rate
    firstResponse: Math.floor(Math.random() * 45 + 10) + 's', // 10-55s
    priority: Math.random() > 0.7 ? 'high' : 'normal',
    sentiment: ['positive', 'neutral', 'negative'][Math.floor(Math.random() * 3)],
    goalCompleted: Math.random() > 0.12, // 88% goal completion
    bounce: Math.random() > 0.92 // 8% bounce rate
  };
});

export { MOCK_AI_AGENTS };

// 🔥 REAL-TIME AGGREGATED METRICS FROM 1000 SESSIONS
let SESSION_COUNTER = 0;
export const getLiveMetrics = async () => {
  await new Promise(r => setTimeout(r, 150));
  SESSION_COUNTER++;
  
  // Live queue simulation (10-25 active)
  const liveQueue = MOCK_SESSIONS.filter(s => 
    new Date(s.startTime) > new Date(Date.now() - 5 * 60 * 1000)
  ).slice(0, Math.floor(Math.random() * 15) + 10);
  
  return {
    queue: liveQueue.length,
    waitTime: `${Math.floor(Math.random() * 120 + 30)}s`,
    waitTimeFormatted: `${Math.floor((Math.random() * 120 + 30)/60)}m ${Math.floor((Math.random() * 120 + 30)%60)}s`,
    sla: (93 + Math.sin(SESSION_COUNTER * 0.1) * 4).toFixed(1),
    activeAgents: Math.floor(Math.random() * 6) + 8,
    availableAgents: 15 - (Math.floor(Math.random() * 6) + 8),
    callsInProgress: Math.floor(Math.random() * 12) + 18,
    chatsInProgress: Math.floor(Math.random() * 8) + 12
  };
};

// 🔥 TEAM METRICS FROM REAL SESSIONS
export const getTeamMetrics = async () => {
  await new Promise(r => setTimeout(r, 800));
  
  const todaySessions = MOCK_SESSIONS.filter(s => {
    const sessionDate = new Date(s.startTime);
    return sessionDate.toDateString() === new Date().toDateString();
  });
  
  const avgAHT = todaySessions.reduce((sum, s) => sum + s.duration, 0) / todaySessions.length || 240;
  const avgCSAT = todaySessions.reduce((sum, s) => sum + s.csat, 0) / todaySessions.length || 92;
  
  return {
    aht: `${Math.floor(avgAHT / 60)}m ${Math.round(avgAHT % 60)}s`,
    ahtFormatted: `${Math.floor(avgAHT / 60)}m ${Math.round(avgAHT % 60)}s`,
    csat: avgCSAT.toFixed(1),
    handleVolume: todaySessions.length,
    frt: `${Math.floor(Math.random() * 25 + 20)}s`,
    occupancy: (72 + Math.random() * 8).toFixed(1),
    agentCount: 12,
    topAgent: MOCK_AI_AGENTS.reduce((top, agent) => 
      agent.sessions > top.sessions ? agent : top
    ).name,
    totalActiveSessions: Math.floor(Math.random() * 45) + 35,
    resolutionRate: ((todaySessions.filter(s => s.resolution).length / todaySessions.length) * 100).toFixed(1)
  };
};

// 🔥 HISTORICAL DATA FROM 1000 SESSIONS
export const getHistoricalData = async (range = 'day') => {
  await new Promise(r => setTimeout(r, 600));
  
  const now = new Date();
  let filtered;
  
  switch(range) {
    case 'hour':
      filtered = MOCK_SESSIONS.filter(s => new Date(s.startTime) > new Date(now.getTime() - 60*60*1000));
      break;
    case 'day':
      filtered = MOCK_SESSIONS.filter(s => {
        const sessionDate = new Date(s.startTime);
        return sessionDate.toDateString() === now.toDateString();
      });
      break;
    case 'week':
      filtered = MOCK_SESSIONS.filter(s => new Date(s.startTime) > new Date(now.getTime() - 7*24*60*60*1000));
      break;
    default:
      filtered = MOCK_SESSIONS.filter(s => new Date(s.startTime) > new Date(now.getTime() - 30*24*60*60*1000));
  }
  
  return {
    range,
    today: MOCK_SESSIONS.filter(s => new Date(s.startTime).toDateString() === new Date().toDateString()).length,
    week: filtered.length,
    month: MOCK_SESSIONS.length,
    csat: {
      today: 92.1,
      week: 91.8,
      month: 91.2
    },
    growth: {
      conversations: '+12.4%',
      csat: '+1.2%'
    }
  };
};

// 🔥 LIVE QUEUE FROM SESSIONS
export const getLiveQueue = async () => {
  await new Promise(r => setTimeout(r, 200));
  return MOCK_SESSIONS
    .filter(s => new Date(s.startTime) > new Date(Date.now() - 10 * 60 * 1000))
    .slice(0, 8)
    .map(s => ({
      id: s.id,
      customer: s.customerName,
      type: s.type,
      waitTime: `${Math.floor(Math.random() * 120)}s`,
      priority: s.priority
    }));
};

// 🔥 FULL 1000 SESSIONS API FOR REPORTS
export const getAllSessions = async (page = 1, limit = 50, search = "") => {
  await new Promise(r => setTimeout(r, 1200));
  
  const filtered = MOCK_SESSIONS.filter(session => {
    if (!search) return true;
    const term = search.toLowerCase();
    return session.customerName.toLowerCase().includes(term) ||
           session.agentName.toLowerCase().includes(term) ||
           session.type.toLowerCase().includes(term);
  });
  
  const start = (page - 1) * limit;
  return {
    sessions: filtered.slice(start, start + limit),
    totalSessions: filtered.length,
    totalPages: Math.ceil(filtered.length / limit),
    currentPage: page
  };
};

// 🔥 CSV EXPORT WITH 1000 SESSIONS
export const exportReport = async (timeRange = 'day') => {
  await new Promise(r => setTimeout(r, 2000));
  
  const todaySessions = MOCK_SESSIONS.filter(s => 
    new Date(s.startTime).toDateString() === new Date().toDateString()
  ).slice(0, 100); // Sample for CSV
  
  const csv = [
    ['Session ID', 'Agent', 'Customer', 'Channel', 'Type', 'Duration', 'CSAT', 'Resolution', 'FCR'],
    ...todaySessions.map(s => [
      s.sessionId, s.agentName, s.customerName, s.channel, s.type, 
      s.aht, `${s.csat}%`, s.resolution ? 'Yes' : 'No', s.fcr ? 'Yes' : 'No'
    ])
  ].map(row => row.join(',')).join('\n');
  
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `ai-performance-${timeRange}-${new Date().toISOString().split('T')[0]}.csv`;
  a.click();
  window.URL.revokeObjectURL(url);
  
  return { success: true, totalSessions: todaySessions.length };
};

// 🔥 TOP AI AGENTS FROM SESSIONS
export const getTopAIAgents = async (limit = 3) => {
  await new Promise(r => setTimeout(r, 400));
  
  const agentStats = MOCK_AI_AGENTS.map(agent => {
    const agentSessions = MOCK_SESSIONS.filter(s => s.agentId === agent.id);
    return {
      ...agent,
      sessions: agentSessions.length,
      avgCsat: (agentSessions.reduce((sum, s) => sum + s.csat, 0) / agentSessions.length || 0).toFixed(1)
    };
  });
  
  return agentStats
    .sort((a, b) => b.sessions - a.sessions)
    .slice(0, limit);
};
