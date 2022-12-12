import React from "react";
import { CollapseContextProps } from "./interface";

const Context = React.createContext<CollapseContextProps>({
  activeKeys: [],
  handleUpdateKeys: (key: string | string[] | null) => undefined,
});

export default Context;
