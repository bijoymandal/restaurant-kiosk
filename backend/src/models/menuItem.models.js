export default (sequelize, DataTypes) => {
  const MenuItem = sequelize.define("MenuItem", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    description:{type:DataTypes.text('medium'),allowNull:now()},
    price:{type:DataTypes.FLOAT,allowNull:false},
    availble:{type:DataTypes.BOOLEAN,allowNull:false},
    createdAt:{type:DataTypes.DATE,allowNull: false,defaultValue: DataTypes.NOW},
    updatedAt:{type:DataTypes.DATE,allowNull: false,defaultValue: DataTypes.NOW}
  });
  return MenuItem;
};
