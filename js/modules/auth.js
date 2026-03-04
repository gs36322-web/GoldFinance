const Auth = {
  login(email) {
    const user = {
      email: email,
      name: email.split("@")[0]
    };

    Storage.set("gold_user", user);
    window.location.href = "dashboard.html";
  },

  logout() {
    Storage.remove("gold_user");
    window.location.href = "index.html";
  },

  checkAuth() {
    const user = Storage.get("gold_user");
    if (!user) {
      window.location.href = "index.html";
    }
  }
};