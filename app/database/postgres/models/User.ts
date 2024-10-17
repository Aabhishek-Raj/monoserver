import { DataTypes, Model, type Sequelize } from "sequelize";

class User extends Model { }

export const initUser = (sequelize: Sequelize): void => {
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: sequelize.literal("uuid_generate_v4()"),
        allowNull: false,
        primaryKey: true,
      },
      cognitoId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // role: {
      //   type: DataTypes.ENUM(User_Role_Enum.Lender, User_Role_Enum.PoolManager),
      //   allowNull: false,
      // },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  )
}

export default User