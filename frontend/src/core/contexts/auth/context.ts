import { createContext } from 'react';
import type { User, AuthContextValue } from './types';

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export type { User, AuthContextValue } from './types';
