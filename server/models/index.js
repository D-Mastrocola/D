const User = require("./User");
const Dweet = require("./Dweet");
const Like = require("./Like");
const Comment = require("./Comment");

User.hasMany(Dweet, {
  foreignKey: "user_id",
});
Dweet.belongsTo(User, {
  foreignKey: "user_id",
});

User.belongsToMany(Dweet, {
  through: Like,
  as: "liked_posts",
  foreignKey: "user_id",
});
Dweet.belongsToMany(User, {
  through: Like,
  as: "liked_posts",
  foreignKey: "dweet_id",
});

Like.belongsTo(User, {
  foreignKey: "user_id",
});

Like.belongsTo(Dweet, {
  foreignKey: "dweet_id",
});

User.hasMany(Like, {
  foreignKey: "user_id",
});

Dweet.hasMany(Like, {
  foreignKey: "dweet_id",
});
Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Comment.belongsTo(Dweet, {
  foreignKey: "dweet_id",
  onDelete: "SET NULL",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Dweet.hasMany(Comment, {
  foreignKey: "dweet_id",
});

module.exports = { User, Dweet, Like, Comment };
