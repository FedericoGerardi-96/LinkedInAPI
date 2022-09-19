import { UserContext } from "./UserContext";
import useUser from "./hook/useUser";

export const UserProvider = ({ children }) => {
    
  const [user, setUserDates, token, setToken] = useUser();  

  return (
    <UserContext.Provider value={{ user, setUserDates, token, setToken }}>
      {children}
    </UserContext.Provider>
  );
};
