// components/ReduxProvider.tsx
'use client';  // Marking this as a client component

import { store } from '@/redux/store';
import { Provider } from 'react-redux';

export function ReduxProvider({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
}
