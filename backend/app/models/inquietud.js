"use strict";

module.exports = (sequelize, DataTypes) => {
  const Inquietud = sequelize.define("inquietud", {
    titulo: { type: DataTypes.STRING(150), allowNull: false },
    descripcion: { type: DataTypes.STRING(500), allowNull: true },
    imagen: { type: DataTypes.STRING(500), allowNull: true },
    video: { type: DataTypes.STRING(500), allowNull: true },
    tipo_inquietud: {
      type: DataTypes.ENUM("pregunta", "respuesta"),
      allowNull: false,
    },
    external_id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4 },
    estado: { type: DataTypes.BOOLEAN, defaultValue: true },
  }, {
    freezeTableName: true,
    timestamps: true,
  });

  Inquietud.associate = function (models) {
    Inquietud.belongsTo(models.persona, {
      foreignKey: "id_persona",
      as: "persona",
    });
  };

  return Inquietud;
};
