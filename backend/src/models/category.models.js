export default (sequelize, DataTypes) => {
  const menuCategory = sequelize.define("MenuCategory", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    createdAt:{type:DataTypes.DATE,allowNull: false,defaultValue: DataTypes.NOW},
    updatedAt:{type:DataTypes.DATE,allowNull: false,defaultValue: DataTypes.NOW}
  });
  return menuCategory;
};
