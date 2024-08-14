const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Dweet model
class Dweet extends Model {
  static like(body, models) {
    return models.Like.create({
      user_id: body.user_id,
      dweet_id: body.dweet_id,
    }).then(() => {
      return Dweet.findOne({
        where: {
          id: body.dweet_id,
        },
        attributes: [
          "id",
          "title",
          "created_at",
          [
            sequelize.literal(
              "(SELECT COUNT(*) FROM like WHERE dweet.id = like.dweet_id)"
            ),
            "like_count",
          ],
        ],
        /*include: [
          {
            model: models.Comment,
            attributes: [
              "id",
              "comment_text",
              "dweet_id",
              "user_id",
              "created_at",
            ],
            include: {
              model: models.User,
              attributes: ["username"],
            },
          },
        ],*/
      });
    });
  }
}

Dweet.init(
  {
    // define an id column
    id: {
      // use the special Sequelize DataTypes object provide what type of data it is
      type: DataTypes.INTEGER,
      // this is the equivalent of SQL's `NOT NULL` option
      allowNull: false,
      // instruct that this is the Primary Key
      primaryKey: true,
      // turn on auto increment
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4],
      },
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4],
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "dweet",
  }
);

module.exports = Dweet;
