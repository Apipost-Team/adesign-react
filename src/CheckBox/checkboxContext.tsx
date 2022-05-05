import { createContext, ReactText } from 'react';

export const CheckboxGroupContext = createContext<{
  disabled?: boolean;
  onChange: (_optionValue: any, _checked: boolean, e: Event) => void;
  value: ReactText[];
  name?: string | number;
}>({
  value: [],
  onChange: () => {},
});
