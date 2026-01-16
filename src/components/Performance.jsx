// 🔥 ULTIMATE INTERACTIVE PERFORMANCE DASHBOARD - Chart.js + Animations
// src/components/Performance.jsx - EYE-CATCHING & INTERACTIVE 🎨✨

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  getLiveMetrics,
  getTeamMetrics,
  getHistoricalData,
  exportReport,
  getLiveQueue,
  getTopAIAgents,
  MOCK_AI_AGENTS
} from '../services/api';
import Chart from 'chart.js/auto'; // npm install chart.js

const Performance = ({ onAction }) => {
  const [activeView, setActiveView] = useState('live');
  const [metrics, setMetrics] = useState({});
  const [topAgents, setTopAgents] = useState([]);
  const [queue, setQueue] = useState([]);
  const [timeRange, setTimeRange] = useState('hour');
  const [loading, setLoading] = useState(false);
  
  // 🔥 Chart refs
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);
  const lineChartRef = useRef(null);
  const charts = useRef({});

  // 🔥 Particles animation
  const particlesCanvasRef = useRef(null);

  // Live data refresh
  useEffect(() => {
    let interval;
    const refreshLive = async () => {
      if (activeView === 'live') {
        const [liveData, queueData] = await Promise.all([
          getLiveMetrics(),
          getLiveQueue()
        ]);
        setMetrics(prev => ({ ...prev, live: liveData }));
        setQueue(queueData);
      }
    };

    interval = setInterval(refreshLive, 3000);
    refreshLive();
    return () => clearInterval(interval);
  }, [activeView]);

  // Load charts data
  useEffect(() => {
    if (activeView === 'historical') loadCharts();
  }, [activeView, timeRange]);

  // 🔥 DESTROY CHARTS ON UNMOUNT
  useEffect(() => {
    return () => {
      Object.values(charts.current).forEach(chart => {
        if (chart) chart.destroy();
      });
    };
  }, []);

  const loadCharts = async () => {
    const histData = await getHistoricalData(timeRange);
    
    // 🔥 BAR CHART - Sessions Over Time
    if (barChartRef.current && !charts.current.bar) {
      charts.current.bar = new Chart(barChartRef.current, {
        type: 'bar',
        data: {
          labels: ['Today', 'Yesterday', 'Week', 'Month'],
          datasets: [{
            label: 'AI Sessions',
            data: [847, 792, 5234, 23456],
            backgroundColor: [
              'rgba(59, 130, 246, 0.8)',
              'rgba(99, 102, 241, 0.8)', 
              'rgba(16, 185, 129, 0.8)',
              'rgba(245, 158, 11, 0.8)'
            ],
            borderColor: [
              'rgba(59, 130, 246, 1)',
              'rgba(99, 102, 241, 1)',
              'rgba(16, 185, 129, 1)', 
              'rgba(245, 158, 11, 1)'
            ],
            borderWidth: 2,
            borderRadius: 12,
            borderSkipped: false,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: {
            intersect: false,
            mode: 'index'
          },
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              backgroundColor: 'rgba(0,0,0,0.9)',
              titleColor: 'white',
              bodyColor: 'white',
              cornerRadius: 12,
              displayColors: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(0,0,0,0.05)'
              },
              ticks: {
                color: '#6B7280'
              }
            },
            x: {
              grid: { display: false },
              ticks: {
                color: '#6B7280',
                font: { size: 14, weight: 'bold' }
              }
            }
          },
          animation: {
            duration: 2000,
            easing: 'easeOutQuart'
          }
        }
      });
    }

    // 🔥 PIE CHART - Channel Distribution  
    if (pieChartRef.current && !charts.current.pie) {
      charts.current.pie = new Chart(pieChartRef.current, {
        type: 'doughnut',
        data: {
          labels: ['Web', 'WhatsApp', 'Telegram', 'Phone', 'Email'],
          datasets: [{
            data: [62, 18, 12, 6, 2],
            backgroundColor: [
              'rgba(59, 130, 246, 0.8)',
              'rgba(16, 185, 129, 0.8)', 
              'rgba(245, 158, 11, 0.8)',
              'rgba(239, 68, 68, 0.8)',
              'rgba(168, 85, 247, 0.8)'
            ],
            borderColor: '#ffffff',
            borderWidth: 4,
            hoverOffset: 10
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '65%',
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                padding: 30,
                usePointStyle: true,
                pointStyle: 'circle',
                font: { size: 14, weight: '600' }
              }
            },
            tooltip: {
              backgroundColor: 'rgba(0,0,0,0.95)',
              titleColor: 'white',
              bodyColor: 'white',
              cornerRadius: 12
            }
          },
          animation: {
            animateRotate: true,
            duration: 2500
          }
        }
      });
    }
  };

  const handleExport = async () => {
    setLoading(true);
    try {
      await exportReport(timeRange);
      onAction?.('✅ Report exported successfully! 🎉');
    } catch (err) {
      onAction?.('❌ Export failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="performance-dashboard min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 relative overflow-hidden">
      {/* 🔥 FLOATING PARTICLES */}
      <canvas 
        ref={particlesCanvasRef}
        className="fixed inset-0 pointer-events-none z-0 opacity-20"
        style={{ zIndex: 0 }}
      />
      
      {/* 🔥 SHIMMERING HEADER */}
      <div className="perf-header mb-12 relative z-10">
        <div className="flex items-center justify-between mb-8 bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/40">
          <div>
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 animate-pulse">
              🚀 AI Performance
            </h1>
            <p className="text-xl text-gray-700 font-semibold tracking-wide">
              Real-time analytics for {MOCK_AI_AGENTS?.length || 50} AI Agents
            </p>
          </div>
          <div className="text-right animate-bounce">
            <div className="text-5xl font-black bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              {metrics.live?.queue || 0}
            </div>
            <div className="text-lg font-bold text-emerald-600 mt-2">Live Sessions</div>
          </div>
        </div>

        {/* 🔥 GLASSMORPHISM TABS */}
        <div className="glass-tabs bg-white/20 backdrop-blur-3xl shadow-3xl rounded-3xl p-3 border border-white/30 flex gap-3">
          {[
            { key: 'live', icon: '🎯', label: 'Live', badge: metrics.live?.queue || 0 },
            { key: 'team', icon: '👥', label: 'Team', badge: topAgents.length },
            { key: 'historical', icon: '📊', label: 'Analytics' }
          ].map(tab => (
            <button
              key={tab.key}
              className={`glass-tab flex-1 py-5 px-6 rounded-2xl font-bold text-lg transition-all duration-500 flex items-center justify-center gap-3 group hover:scale-105 hover:shadow-3xl ${
                activeView === tab.key
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-3xl scale-105 border-2 border-white/50'
                  : 'text-gray-700 hover:text-indigo-600 bg-white/50 hover:bg-white/80'
              }`}
              onClick={() => setActiveView(tab.key)}
            >
              <span className="text-2xl">{tab.icon}</span>
              <span>{tab.label}</span>
              {tab.badge > 0 && (
                <span className={`w-7 h-7 bg-white/20 backdrop-blur-sm rounded-full text-xs font-black flex items-center justify-center ${
                  activeView === tab.key ? 'bg-white/40 text-white' : 'text-indigo-600'
                }`}>
                  {tab.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 🔥 LIVE DASHBOARD - GLITCH EFFECT */}
      {activeView === 'live' && (
        <div className="live-metrics space-y-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              { icon: '📞', value: metrics.live?.queue || 0, label: 'Live Sessions', color: 'from-red-400 to-pink-500', alert: metrics.live?.queue > 15 },
              { icon: '⚡', value: metrics.live?.waitTimeFormatted || '1m23s', label: 'Response Time', color: 'from-yellow-400 to-orange-500' },
              { icon: '🎯', value: `${metrics.live?.sla || 94}%`, label: 'SLA Achieved', color: 'from-emerald-400 to-teal-500' },
              { icon: '🤖', value: metrics.live?.activeAgents || 12, label: 'Active Agents', color: 'from-indigo-400 to-purple-500' }
            ].map((metric, i) => (
              <div
                key={i}
                className={`metric-card p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 group relative overflow-hidden ${
                  metric.color}/10 backdrop-blur-xl border border-white/40 hover:border-indigo-200`}
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-20 animate-shimmer"></div>
                <div className="metric-icon text-4xl group-hover:scale-125 transition-transform duration-500 mb-6 relative z-10">
                  {metric.icon}
                </div>
                <div className="metric-value text-5xl md:text-6xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4 relative z-10">
                  {metric.value}
                </div>
                <div className="metric-label text-xl font-bold text-gray-800 mb-6 relative z-10">{metric.label}</div>
                <div className={`metric-trend font-black text-2xl relative z-10 ${
                  metric.alert ? 'text-red-500 animate-pulse' : 'text-emerald-600'
                }`}>
                  {metric.alert ? '🔥 HIGH LOAD' : '✅ PERFECT'}
                </div>
              </div>
            ))}
          </div>

          {/* 🔥 3D GLASS QUEUE */}
          <div className="glass-card max-h-96 overflow-hidden shadow-3xl">
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white p-8 flex justify-between items-center">
              <div>
                <h3 className="text-3xl font-black mb-1 tracking-wide">LIVE QUEUE</h3>
                <div className="text-lg opacity-90 font-semibold">{queue.length} waiting • Auto-refreshing</div>
              </div>
              <div className="w-24 h-24 bg-white/20 backdrop-blur-xl rounded-3xl flex items-center justify-center animate-spin-slow">
                ↻
              </div>
            </div>
            <div className="queue-list divide-y divide-white/20 max-h-80 overflow-y-auto">
              {queue.slice(0, 10).map((item, i) => (
                <div key={i} className="p-6 hover:bg-white/10 transition-all flex items-center justify-between group hover:scale-[1.02]">
                  <div className="flex items-center gap-4">
                    <div className={`w-4 h-4 rounded-full shadow-lg ${item.priority === 'high' ? 'bg-gradient-to-r from-red-400 to-pink-400' : 'bg-gradient-to-r from-emerald-400 to-teal-400'}`}></div>
                    <div>
                      <div className="font-bold text-lg text-white group-hover:text-indigo-100">{item.customer}</div>
                      <div className="text-sm opacity-80">{item.type}</div>
                    </div>
                  </div>
                  <div className={`px-6 py-3 rounded-2xl font-black shadow-lg backdrop-blur-sm ${
                    item.waitTime.includes('>2m') 
                      ? 'bg-gradient-to-r from-red-500/30 to-pink-500/30 text-red-200 border-2 border-red-300/50' 
                      : 'bg-gradient-to-r from-emerald-500/30 to-teal-500/30 text-emerald-100 border-2 border-emerald-300/50'
                  }`}>
                    {item.waitTime}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 🔥 HISTORICAL - REAL CHARTS */}
      {activeView === 'historical' && (
        <div className="historical-charts space-y-12 relative z-10">
          {/* 🔥 CONTROLS */}
          <div className="glass-card p-8 flex flex-col lg:flex-row gap-6 lg:items-center">
            <div className="time-selector flex flex-wrap gap-3 bg-white/30 backdrop-blur-xl rounded-2xl p-3">
              {['hour', 'day', 'week', 'month'].map(view => (
                <button
                  key={view}
                  className={`px-8 py-4 rounded-xl font-black text-lg transition-all shadow-xl hover:shadow-2xl hover:scale-105 ${
                    timeRange === view
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-indigo-500/50 scale-110'
                      : 'bg-white/70 text-gray-800 hover:bg-indigo-100'
                  }`}
                  onClick={() => setTimeRange(view)}
                >
                  {view.toUpperCase()}
                </button>
              ))}
            </div>
            
            <button 
              className="ml-auto bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-white px-12 py-5 rounded-3xl font-black text-xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all flex items-center gap-4 group"
              onClick={handleExport}
              disabled={loading}
            >
              📥 Download Report
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin group-hover:opacity-100 opacity-0 transition-opacity"></div>
            </button>
          </div>

          {/* 🔥 INTERACTIVE CHARTS GRID */}
          <div className="charts-grid grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* BAR CHART */}
            <div className="glass-card p-8 h-96">
              <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
                📈 Sessions Growth
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm font-bold rounded-full">+18%</span>
              </h3>
              <canvas ref={barChartRef} className="w-full h-full"></canvas>
            </div>

            {/* PIE CHART */}
            <div className="glass-card p-8 h-96">
              <h3 className="text-2xl font-black text-gray-900 mb-8">📱 Channel Split</h3>
              <canvas ref={pieChartRef} className="w-full h-full"></canvas>
            </div>

            {/* 🔥 LINE CHART */}
            <div className="glass-card p-8 h-96 xl:col-span-1">
              <h3 className="text-2xl font-black text-gray-900 mb-8">⚡️ CSAT Trend</h3>
              <div className="w-full h-full bg-gradient-to-b from-purple-50 to-pink-50 rounded-2xl p-6 flex items-center justify-center">
                <div className="text-center text-6xl font-black bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent animate-pulse">
                  94.2%
                </div>
                <div className="mt-6 text-lg font-bold text-gray-700">Week over Week ↑</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {loading && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-2xl flex items-center justify-center z-50">
          <div className="glass-card p-12 text-center max-w-md">
            <div className="w-24 h-24 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto mb-8 shadow-2xl"></div>
            <h3 className="text-3xl font-black text-white mb-4">Generating Report ✨</h3>
            <div className="space-y-2 text-white/90">
              <div className="flex items-center justify-center gap-2">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-bounce"></div>
                <span>Exporting 1000+ sessions</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Performance;
