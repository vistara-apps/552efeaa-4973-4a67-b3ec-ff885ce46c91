export interface Asset {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  volume: number;
  marketCap: number;
  icon?: string;
}

export interface Platform {
  id: string;
  name: string;
  balance: number;
  value: number;
  icon?: string;
  color: string;
}

export interface Portfolio {
  totalValue: number;
  change24h: number;
  platforms: Platform[];
  assets: Asset[];
}

export interface MarketData {
  labels: string[];
  data: number[];
}

export interface User {
  name: string;
  avatar: string;
  verified: boolean;
}
