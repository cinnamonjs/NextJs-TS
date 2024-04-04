import { FC, ReactNode, useState, useContext, createContext } from "react";

interface ContextProps {
  children: ReactNode;
}

interface UserContextType {
  username: string;
  setUsername: (username: string) => void;
}

// create context for store global variables can't be lost when re-rendering
const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: FC<ContextProps> = ({ children }) => {
  const [username, setUsername] = useState("");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
