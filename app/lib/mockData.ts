import { Asset, Platform, Portfolio, MarketData, User } from '../types';

export const mockUser: User = {
  name: 'Dan Schultz',
  avatar: '/api/placeholder/32/32',
  verified: true,
};

export const mockAssets: Asset[] = [
  {
    id: '1',
    symbol: 'BTC',
    name: 'Bitcoin',
    price: 45234.67,
    change24h: 2.34,
    volume: 28500000000,
    marketCap: 890000000000,
  },
  {
    id: '2',
    symbol: 'ETH',
    name: 'Ethereum',
    price: 2834.12,
    change24h: -1.23,
    volume: 15200000000,
    marketCap: 340000000000,
  },
  {
    id: '3',
    symbol: 'SOL',
    name: 'Solana',
    price: 98.45,
    change24h: 5.67,
    volume: 2100000000,
    marketCap: 42000000000,
  },
  {
    id: '4',
    symbol: 'AVAX',
    name: 'Avalanche',
    price: 34.78,
    change24h: -2.45,
    volume: 450000000,
    marketCap: 12700000000,
  },
];

export const mockPlatforms: Platform[] = [
  {
    id: '1',
    name: 'Uniswap',
    balance: 2.45,
    value: 6945.89,
    color: '#FF007A',
  },
  {
    id: '2',
    name: 'Compound',
    balance: 1250.67,
    value: 3546.23,
    color: '#00D395',
  },
  {
    id: '3',
    name: 'Aave',
    balance: 456.23,
    value: 1292.45,
    color: '#B6509E',
  },
  {
    id: '4',
    name: 'Curve',
    balance: 8934.12,
    value: 894.67,
    color: '#40E0D0',
  },
];

export const mockPortfolio: Portfolio = {
  totalValue: 19608.24,
  change24h: 3.45,
  platforms: mockPlatforms,
  assets: mockAssets,
};

export const mockChartData: MarketData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  data: [12000, 15000, 13500, 18000, 16500, 19500, 17000, 21000, 19000, 22500, 20000, 19608],
};

export const mockUserBalances = [
  { name: 'Andy Greydon', amount: '$1,642', verified: true },
  { name: 'Ada Future', amount: '$892', verified: false },
  { name: 'Ben Eugene', amount: '$1,564', verified: true },
  { name: 'Funko Orluga', amount: '$756', verified: false },
];

export const mockSettings = [
  { name: 'Display Units', enabled: true },
  { name: 'Coin/Token', enabled: true },
  { name: 'Margin Filters', enabled: false },
  { name: 'Contract Good Options', enabled: true },
  { name: 'Coin Filters', enabled: true },
  { name: 'Trend Filters', enabled: true },
  { name: 'Positioning', enabled: false },
];

export const mockMetrics = [
  { label: 'Basics', value: '32,5%', change: '+6,79%' },
  { label: 'Status', value: '11,406', change: '' },
  { label: 'Accounts', value: '$363,636', change: '' },
];
