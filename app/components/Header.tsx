'use client';

import React from 'react';
import { Search, Plus, Mic, Settings } from 'lucide-react';
import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';

export function Header() {
  return (
    <div className="bg-white/5 backdrop-blur-sm border-b border-white/10 p-4">
      <div className="flex items-center justify-between">
        {/* Search Bar */}
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
            <input
              type="text"
              placeholder="ChronoFilter For"
              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/50 focus:outline-none focus:border-primary-400 transition-colors duration-200"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
              <button className="p-1.5 hover:bg-white/10 rounded-lg transition-colors duration-200">
                <Plus className="w-4 h-4 text-white/70" />
              </button>
              <button className="p-1.5 hover:bg-white/10 rounded-lg transition-colors duration-200">
                <Mic className="w-4 h-4 text-white/70" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4 ml-6">
          <Wallet>
            <ConnectWallet>
              <button className="bg-dark-800/80 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 flex items-center space-x-2 hover:border-white/30 transition-all duration-200">
                <Settings className="w-4 h-4 text-white/70" />
                <span className="text-sm text-white">Dan Schultz</span>
              </button>
            </ConnectWallet>
          </Wallet>
        </div>
      </div>
    </div>
  );
}
