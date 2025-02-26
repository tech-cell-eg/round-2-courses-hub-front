import { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  token: string | null;
  setToken: (token: string | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setTokenState] = useState<string | null>(null);

  const setToken = (newToken: string | null) => {
    setTokenState(newToken);
    if (newToken) {
      localStorage.setItem("student_token", newToken);
    } else {
      // localStorage.removeItem("student_token");
    }
  };

  useEffect(() => {
    const savedToken = localStorage.getItem("student_token");
    if (savedToken) {
      setTokenState(savedToken);
    }
  }, []);
 

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
