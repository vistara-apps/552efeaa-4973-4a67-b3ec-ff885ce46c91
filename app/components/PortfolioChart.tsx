'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { mockChartData } from '../lib/mockData';

interface PortfolioChartProps {
  showMini?: boolean;
}

export function PortfolioChart({ showMini = false }: PortfolioChartProps) {
  const chartData = mockChartData.labels.map((label, index) => ({
    name: label,
    value: mockChartData.data[index],
  }));

  return (
    <div className={`${showMini ? 'h-32' : 'h-48'} chart-container`}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
            hide={showMini}
          />
          <YAxis hide />
          <Bar 
            dataKey="value" 
            fill="url(#gradient)"
            radius={[2, 2, 0, 0]}
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#a855f7" stopOpacity={0.3} />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
