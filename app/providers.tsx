'use client';

import { MiniKitProvider } from '@coinbase/onchainkit/minikit';
import { type ReactNode } from 'react';

export function Providers(props: { children: ReactNode }) {
  return (
    <MiniKitProvider>
      {props.children}
    </MiniKitProvider>
  );
}
