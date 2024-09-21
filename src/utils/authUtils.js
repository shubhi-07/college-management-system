// Utility function to register a user
export const register = (username, password, role) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username, password, role });
    localStorage.setItem('users', JSON.stringify(users));
  };
  
  // Utility function to authenticate a user
  export const authenticate = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.find(user => user.username === username && user.password === password);
  };
  
  // Utility function to handle login
  export const login = (username, password) => {
    const user = authenticate(username, password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  };
  
  // Utility function to get the currently logged-in user
  export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('currentUser'));
  };
  
  export const isAuthenticated = () => {
    return !!localStorage.getItem('currentUser');
  };
  
  // Utility function to log out the user
  export const logout = () => {
    localStorage.removeItem('currentUser');
  };

  