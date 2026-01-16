// src/components/Bots.jsx - FULL API INTEGRATION
import React, { useState, useEffect } from 'react';
import { 
  getAllBots, createBot, updateBot, deleteBot, 
  trainBot, publishBot, rollbackBot, toggleVoice 
} from '../services/api';

const Bots = ({ onBotAction }) => {
  const [botsData, setBotsData] = useState({ 
    bots: [], totalBots: 0, totalPages: 0, currentPage: 1, limit: 12 
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [newBot, setNewBot] = useState({ name: '', description: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // ✅ API: Fetch all bots (12 per page)
  const fetchBots = async (page = 1, search = '') => {
    setLoading(true);
    setError('');
    try {
      const data = await getAllBots(page, 12, search);
      setBotsData(data);
    } catch (err) {
      setError('Failed to fetch bots');
      console.error('Bots API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Auto-fetch on mount & search
  useEffect(() => {
    fetchBots(1);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchBots(1, searchTerm);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // ✅ API: Create new bot
  const handleCreateBot = async () => {
    if (!newBot.name.trim()) return;
    try {
      await createBot(newBot);
      onBotAction?.('✅ New bot created successfully');
      setNewBot({ name: '', description: '' });
      fetchBots(1, searchTerm);
    } catch (err) {
      setError(err.message || 'Failed to create bot');
    }
  };

  // ✅ API: Delete bot
  const handleDeleteBot = async (botId) => {
    if (!window.confirm('Delete this bot permanently?')) return;
    try {
      await deleteBot(botId);
      onBotAction?.('✅ Bot deleted successfully');
      fetchBots(botsData.currentPage, searchTerm);
    } catch (err) {
      setError('Failed to delete bot');
    }
  };

  // ✅ API: Train bot intents
  const handleTrainBot = async (botId) => {
    try {
      await trainBot(botId);
      onBotAction?.('✅ Bot training started');
      fetchBots(botsData.currentPage, searchTerm);
    } catch (err) {
      setError('Training failed');
    }
  };

  // ✅ API: Publish/Rollback
  const handleDeployAction = async (botId, currentStatus) => {
    try {
      if (currentStatus === 'live') {
        await rollbackBot(botId);
        onBotAction?.('✅ Bot rolled back to previous version');
      } else {
        await publishBot(botId);
        onBotAction?.('✅ Bot published successfully');
      }
      fetchBots(botsData.currentPage, searchTerm);
    } catch (err) {
      setError('Deploy action failed');
    }
  };

  // ✅ API: Toggle voice mode
  const handleToggleVoice = async (botId, currentVoice) => {
    try {
      await toggleVoice(botId, !currentVoice);
      onBotAction?.('✅ Voice mode updated');
      fetchBots(botsData.currentPage, searchTerm);
    } catch (err) {
      setError('Voice toggle failed');
    }
  };

  if (loading && botsData.bots.length === 0) {
    return (
      <div className="admin-bots-section">
        <div className="loading-state">
          <div className="loading-spinner"></div>
          Loading bots...
        </div>
      </div>
    );
  }

  return (
    <div className="admin-bots-section">
      {/* Stats Cards - Real API Data */}
      <div className="bots-stats-grid">
        <div className="stat-card">
          <div className="stat-icon">🤖</div>
          <div>Total Bots</div>
          <div className="stat-value">{botsData.totalBots}</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🟢</div>
          <div>Live Bots</div>
          <div className="stat-value">
            {botsData.bots.filter(b => b.status === 'live').length}
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div>Total Sessions</div>
          <div className="stat-value">
            {botsData.bots.reduce((sum, b) => sum + (b.sessions || 0), 0).toLocaleString()}
          </div>
        </div>
      </div>

      {/* Search + Create */}
      <div className="bots-header">
        <input 
          className="search-input"
          placeholder="🔍 Search bots..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="create-bot-form">
          <input 
            className="new-bot-input"
            placeholder="New bot name..."
            value={newBot.name}
            onChange={(e) => setNewBot({...newBot, name: e.target.value})}
          />
          <input 
            className="new-bot-input"
            placeholder="Description..."
            value={newBot.description}
            onChange={(e) => setNewBot({...newBot, description: e.target.value})}
          />
          <button className="btn-primary" onClick={handleCreateBot}>
            ➕ Create Bot
          </button>
        </div>
      </div>

      {error && (
        <div className="error-message">
          {error}
          <button onClick={() => setError('')} className="close-btn">×</button>
        </div>
      )}

      {/* Bots Cards Grid */}
      <div className="bots-grid">
        {botsData.bots.map(bot => (
          <div key={bot.id} className={`bot-card ${bot.status}`}>
            <div className="bot-header">
              <div className="bot-name">{bot.name}</div>
              <div className={`status-badge ${bot.status}`}>
                {bot.status === 'live' ? '🟢 LIVE' : 
                 bot.status === 'training' ? '🟡 TRAINING' : '⚫ DRAFT'}
              </div>
            </div>

            <div className="bot-stats">
              <div className="stat-item">
                <span>Sessions</span>
                <span>{(bot.sessions || 0).toLocaleString()}</span>
              </div>
              <div className="stat-item">
                <span>Version</span>
                <span>{bot.version || 'v1.0'}</span>
              </div>
              {bot.voiceEnabled && (
                <div className="stat-item voice-active">
                  <span>🎙️ Voice</span>
                  <span>ON</span>
                </div>
              )}
            </div>

            {/* API Actions */}
            <div className="bot-actions">
              <button className="btn-edit" title="Edit Bot" onClick={() => {/* Edit modal */}}>
                ✏️
              </button>
              <button className="btn-train" title="Train Intents" onClick={() => handleTrainBot(bot.id)}>
                📚
              </button>
              <button className="btn-flow" title="Build Flow">
                ⛓️
              </button>
              <button className="btn-test" title="Test Bot">
                🎯
              </button>
              <button 
                className="btn-voice" 
                title={bot.voiceEnabled ? 'Disable Voice' : 'Enable Voice'}
                onClick={() => handleToggleVoice(bot.id, bot.voiceEnabled)}
              >
                {bot.voiceEnabled ? '🔊' : '🔇'}
              </button>
              <button 
                className={`btn-deploy ${bot.status}`} 
                title={bot.status === 'live' ? 'Rollback' : 'Publish'}
                onClick={() => handleDeployAction(bot.id, bot.status)}
              >
                {bot.status === 'live' ? '↩️' : '🚀'}
              </button>
              <button className="btn-delete" title="Delete Bot" onClick={() => handleDeleteBot(bot.id)}>
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>

      {botsData.bots.length === 0 && !loading && (
        <div className="empty-bots">
          <div className="empty-icon">🤖</div>
          <h3>No Bots Found</h3>
          <p>Create your first AI bot or try a different search</p>
        </div>
      )}
    </div>
  );
};

export default Bots;
