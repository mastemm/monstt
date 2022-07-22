const AbstractManager = require("./AbstractManager");

class ContentManager extends AbstractManager {
  static table = "content";

  insert(content) {
    return this.connection.query(
      `insert into ${ContentManager.table} (title) values (?)`,
      [content.title]
    );
  }

  update(content) {
    return this.connection.query(
      `update ${ContentManager.table} set title = ? where id = ?`,
      [content.title, content.id]
    );
  }
}

module.exports = ContentManager;
