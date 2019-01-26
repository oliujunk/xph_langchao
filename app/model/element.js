'use strict';

module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;

  const Element = app.model.define(
    'element',
    {
      idm: { type: INTEGER, primaryKey: true, autoIncrement: true },
      index: STRING(255),
      name: STRING(255),
      unit: STRING(255),
      min: STRING(255),
      max: STRING(255),
      prec: STRING(255),
    },
    {
      tableName: 'xhp_ele_info',
      freezeTableName: true,
      timestamps: false,
    }
  );

  return Element;
};
