import React from 'react';
import { CollapseContextProps } from './interface';

const Context = React.createContext<CollapseContextProps | null>(null);

export default Context;
