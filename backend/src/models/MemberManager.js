const AbstractManager = require("./AbstractManager");

class MemberManager extends AbstractManager {
  static table = "member";

  insert(member) {
    return this.connection.query(
      `insert into ${MemberManager.table} (title) values (?)`,
      [member.title]
    );
  }

  update(member) {
    return this.connection.query(
      `update ${MemberManager.table} set title = ? where id = ?`,
      [member.title, member.id]
    );
  }
}

module.exports = MemberManager;
