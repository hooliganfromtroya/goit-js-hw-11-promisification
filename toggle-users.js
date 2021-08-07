const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];
  
  const toggleUserState = (allUsers, userName, callback) => {
    const updatedUsers = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user,
    );
  
    return new Promise(resolve => resolve(updatedUsers))
  };
  
  const logger1 = updatedUsers => console.table(updatedUsers);
  
  toggleUserState(users, 'Mango').then(logger1);
  toggleUserState(users, 'Lux').then(logger1);