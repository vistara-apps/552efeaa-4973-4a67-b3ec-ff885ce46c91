'use client';

import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { mockMetrics, mockPortfolio } from '../lib/mockData';
import { PortfolioChart } from './PortfolioChart';

export function MainDashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Header Card */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gradient">ChronoFilter</h1>
            <p className="text-white/70">Coordinate assets via timescale</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-2xl font-bold text-white">${mockPortfolio.totalValue.toLocaleString()}</p>
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm">+{mockPortfolio.change24h}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          {mockMetrics.map((metric, index) => (
            <div key={index} className="metric-card">
              <p className="text-white/50 text-sm">{metric.label}</p>
              <div className="flex items-center justify-between">
                <p className="text-xl font-semibold text-white">{metric.value}</p>
                {metric.change && (
                  <span className={`text-sm ${metric.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                    {metric.change}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <PortfolioChart />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-3 gap-6">
        {/* Portfolio Overview */}
        <div className="col-span-2 card">
          <h3 className="text-lg font-semibold text-white mb-4">Content Filterers</h3>
          <div className="mb-4">
            <div className="text-2xl font-bold text-white">${mockPortfolio.totalValue.toLocaleString()}</div>
            <p className="text-white/50 text-sm">FINANCE GAIA</p>
          </div>
          <PortfolioChart showMini />
        </div>

        {/* User Settings */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">User Settings</h3>
            <button className="text-white/50 hover:text-white text-sm">Documents</button>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-white/70 text-sm">Game Recycling</span>
              <span className="text-white text-sm">FII-FII</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white">AG</span>
              </div>
              <div className="flex-1">
                <p className="text-white text-sm">Amy Greydon</p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-xs text-white/50">Active</span>
                </div>
              </div>
              <div className="bg-primary-500 text-white text-xs px-2 py-1 rounded">$3,847</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
