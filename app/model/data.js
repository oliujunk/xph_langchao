'use strict';

module.exports = app => {
  const { INTEGER, FLOAT, STRING } = app.Sequelize;

  const Data = app.model.define(
    'data',
    {
      idm: { type: INTEGER, primaryKey: true, autoIncrement: true },
      facId: STRING(20),
      dataTime: STRING(20),
      e1: FLOAT,
      e2: FLOAT,
      e3: FLOAT,
      e4: FLOAT,
      e5: FLOAT,
      e6: FLOAT,
      e7: FLOAT,
      e8: FLOAT,
      e9: FLOAT,
      e10: FLOAT,
      e11: FLOAT,
      e12: FLOAT,
      e13: FLOAT,
      e14: FLOAT,
      e15: FLOAT,
      e16: FLOAT,
    },
    {
      tableName: 'xph_dcurrent',
      freezeTableName: true,
      timestamps: false,
    }
  );

  return Data;
};
