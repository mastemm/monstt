const AbstractManager = require("./AbstractManager");

class MemberManager extends AbstractManager {
  static table = "member";

  insert(member) {
    return this.connection.query(
      `insert into ${MemberManager.table} (lastname,firstname,rank,category,points,avatar) values (?,?,?,?,?,?)`,
      [
        member.lastname,
        member.firstname,
        member.rank,
        member.category,
        member.points,
        member.avatar,
      ]
    );
  }

  update(member) {
    return this.connection.query(
      `update ${MemberManager.table} set ? where id = ?`,
      [member, member.id]
    );
  }
}

module.exports = MemberManager;
