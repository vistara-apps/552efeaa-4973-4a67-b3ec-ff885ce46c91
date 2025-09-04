'use client';

import React from 'react';
import { Settings, Eye, MoreHorizontal } from 'lucide-react';
import { mockSettings, mockUserBalances } from '../lib/mockData';

export function RightSidebar() {
  return (
    <div className="w-80 bg-dark-900/50 backdrop-blur-sm border-l border-white/10 p-6 space-y-6">
      {/* Settings Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Settings className="w-5 h-5 text-white/70" />
          <span className="text-lg font-semibold text-white">Settings</span>
        </div>
        <button className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
          <Eye className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* Portfolio Value */}
      <div>
        <div className="text-3xl font-bold text-white mb-2">$3,556</div>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <span className="text-white/70">Shares Profile</span>
            <div className="bg-yellow-400 w-6 h-3 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Settings List */}
      <div className="space-y-3">
        {mockSettings.map((setting, index) => (
          <div key={index} className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
              </div>
              <span className="text-white/80 text-sm">{setting.name}</span>
            </div>
            <div className={`w-10 h-5 rounded-full transition-colors duration-200 ${
              setting.enabled ? 'bg-primary-500' : 'bg-white/20'
            }`}>
              <div className={`w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${
                setting.enabled ? 'translate-x-5' : 'translate-x-0.5'
              } translate-y-0.5`}></div>
            </div>
          </div>
        ))}
      </div>

      {/* User Balances */}
      <div className="mt-8">
        <h3 className="text-white font-medium mb-4">Settings</h3>
        <div className="space-y-4">
          {mockUserBalances.map((user, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-medium">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-white text-sm">{user.name}</p>
                  {user.verified && (
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-xs text-white/50">Verified</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-white text-sm">{user.amount}</span>
                <button>
                  <MoreHorizontal className="w-4 h-4 text-white/50" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Settings */}
      <div className="mt-8 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-white/70 text-sm">Download</span>
          <div className="bg-white/10 rounded px-2 py-1">
            <span className="text-xs text-white/70">93.0%</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-white/70 text-sm">Margin</span>
          <div className="bg-white/10 rounded px-2 py-1">
            <span className="text-xs text-white/70">$1,500,000</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-white/70 text-sm">Maximales</span>
          <div className="bg-white/10 rounded px-2 py-1">
            <span className="text-xs text-white/70">$ 93.0M</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-white/70 text-sm">Favor-Sitzung</span>
          <span className="text-xs text-white/70">▶</span>
        </div>
      </div>
    </div>
  );
}
