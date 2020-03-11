const Sequelize = require("sequelize");
const databaseConfig = require("../config/database");

const models = [];

class Database {
  constructor() {}
  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

module.exports = new Database();
