import * as React from "react";

export const UserContext = React.createContext<any>({ name: "", auth: false });

const UserProvider = ({ children }: any) => {
  // User is the name of the "data" that gets stored in context
  const [user, setUser] = React.useState<any>({ name: "", auth: false });

  React.useEffect(() => {
    const getUserInfo = localStorage.getItem("user");
    console.log("On Load User Info");
    console.log(getUserInfo);
    if (getUserInfo) {
      console.log("setting user");
      setUser(JSON.parse(getUserInfo));
    }
  }, []);

  const login = (userInfo: any) => {
    const updatedUserInfo = {
      ...userInfo.user,
      auth: true,
    };
    setUser(updatedUserInfo);
    localStorage.setItem("user", JSON.stringify(updatedUserInfo));
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser({
      name: "",
      auth: false,
    });
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
