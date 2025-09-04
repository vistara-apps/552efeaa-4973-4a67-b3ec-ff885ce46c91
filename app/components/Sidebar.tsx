'use client';

import React from 'react';
import { 
  Home,
  Search,
  Bell,
  Settings,
  BarChart3,
  Wallet,
  TrendingUp,
  Users,
  FileText,
  Layers,
  Download
} from 'lucide-react';

const sidebarItems = [
  { icon: Home, label: 'Dashboard', active: true },
  { icon: Search, label: 'Search' },
  { icon: Bell, label: 'Notifications' },
  { icon: Settings, label: 'Settings' },
  { icon: BarChart3, label: 'Analytics' },
  { icon: Wallet, label: 'Wallet' },
  { icon: TrendingUp, label: 'Trading' },
  { icon: Users, label: 'Community' },
  { icon: FileText, label: 'Reports' },
  { icon: Layers, label: 'Pools' },
  { icon: Download, label: 'Export' },
];

export function Sidebar() {
  return (
    <div className="w-16 bg-dark-900/50 backdrop-blur-sm border-r border-white/10 flex flex-col items-center py-6 space-y-6">
      {/* User Avatar */}
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400 flex items-center justify-center">
        <span className="text-sm font-semibold text-white">DS</span>
      </div>
      
      {/* Navigation Items */}
      <nav className="flex flex-col space-y-4">
        {sidebarItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <button
              key={index}
              className={`p-3 rounded-lg transition-all duration-200 hover:bg-white/10 ${
                item.active 
                  ? 'bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-400/50' 
                  : ''
              }`}
              title={item.label}
            >
              <IconComponent className={`w-5 h-5 ${item.active ? 'text-primary-400' : 'text-white/70'}`} />
            </button>
          );
        })}
      </nav>
    </div>
  );
}
