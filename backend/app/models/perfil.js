"use strict";

module.exports = (sequelize, DataTypes) => {
  const perfil = sequelize.define(
    "perfil",
    {
      nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      external_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
    }
  );

  perfil.associate = function (models) {
    perfil.belongsToMany(models.persona, {
      through: "persona_perfil",
      foreignKey: "id_perfil",
      as: "personas",
    });
  };

  return perfil;
};
