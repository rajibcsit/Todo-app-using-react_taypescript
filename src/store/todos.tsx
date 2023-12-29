import { ReactNode, createContext } from "react";

export type TodosProvideerProps = {
  children: ReactNode;
};

export type todosContext = {
  todos: [];
};

export const todosContext = createContext(null);

export const TodosProvideer = ({ children }: TodosProvideerProps) => {
  return <todosContext.Provider value={}>{children}</todosContext.Provider>;
};
