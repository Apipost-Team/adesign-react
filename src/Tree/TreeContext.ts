import { createContext } from 'react';
import { treeContextProps } from './interface';

const TreeContext = createContext<treeContextProps>({});

export default TreeContext;
