import { createContext } from 'react';

export const TableContext = createContext<any>(null);

export const ColumnContext = createContext<any>({});

export default {
  TableContext,
  ColumnContext,
};
