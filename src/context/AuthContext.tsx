import { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  token: string | null;
  role: string | null;
  setToken: (token: string | null, role: string | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setTokenState] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);

  const setToken = (newToken: string | null, userRole: string | null) => {
    setTokenState(newToken);
    setRole(userRole);

    if (newToken) {
      if (userRole === "student") {
        localStorage.setItem("student_token", newToken);
        localStorage.setItem("role", "student");
      } else if (userRole === "instructor") {
        localStorage.setItem("instructor_token", newToken);
        localStorage.setItem("role", "instructor");
      }
    } else {
      localStorage.removeItem("student_token");
      localStorage.removeItem("instructor_token");
      localStorage.removeItem("role");
    }
  };

  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    if (savedRole === "student") {
      setTokenState(localStorage.getItem("student_token"));
      setRole("student");
    } else if (savedRole === "instructor") {
      setTokenState(localStorage.getItem("instructor_token"));
      setRole("instructor");
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, role, setToken }}>
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
