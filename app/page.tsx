'use client';

import React, { useEffect } from 'react';
import { useMiniKit } from '@coinbase/onchainkit/minikit';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { MainDashboard } from './components/MainDashboard';
import { RightSidebar } from './components/RightSidebar';

export default function Home() {
  const { setFrameReady } = useMiniKit();

  useEffect(() => {
    setFrameReady();
  }, [setFrameReady]);

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-primary-500 via-secondary-500 to-secondary-700">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 overflow-y-auto">
            <MainDashboard />
          </div>
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
