const fakeAuthProvider = {
  isAuthenticated: false,
  signin(callback) {
    setTimeout(() => {
      fakeAuthProvider.isAuthenticated = true;
      callback();
    }, 100); // fake async
  },
  signout(callback) {
    setTimeout(() => {
      fakeAuthProvider.isAuthenticated = false;
      callback();
    }, 100);
  },
};

export { fakeAuthProvider };
