import User from "../registration/User";

export default class UsersRepository {

  constructor(eventbus) {
    this.eventbus = eventbus;
    this.STORAGE_ID = "hotelbooking";
  }

  getUsers() {
    return JSON.parse(localStorage.getItem(this.STORAGE_ID + "_users") || "[]");
  }

  putUsers(users) {
    localStorage.setItem(this.STORAGE_ID + "_users", JSON.stringify(users));
  }

  findUserById(id) {
    let users = this.getUsers();
    for (let user of users) {
      if (user.id === id) {
        return user;
      }
    }
    return null;
  }

  saveUser(user) {
    let users = this.getUsers();
    for (let i = 0, len = users.length; i < len; i++) {
      let _user = users[i];
      if (_user.id === user.id) {
        users[i] = user;
        break;
      }
    }
    this.putUsers(users);
  }

}
