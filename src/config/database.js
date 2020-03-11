module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "fastfeet",
  password: "fastfeet",
  database: "fastfeet",
  image: "postgres:12",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
