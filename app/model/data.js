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
      j1: INTEGER,
      j2: INTEGER,
      j3: INTEGER,
      j4: INTEGER,
      j5: INTEGER,
      j6: INTEGER,
      j7: INTEGER,
      j8: INTEGER,
      j9: INTEGER,
      j10: INTEGER,
      j11: INTEGER,
      j12: INTEGER,
      j13: INTEGER,
      j14: INTEGER,
      j15: INTEGER,
      j16: INTEGER,
      j17: INTEGER,
      j18: INTEGER,
      j19: INTEGER,
      j20: INTEGER,
      j21: INTEGER,
      j22: INTEGER,
      j23: INTEGER,
      j24: INTEGER,
      j25: INTEGER,
      j26: INTEGER,
      j27: INTEGER,
      j28: INTEGER,
      j29: INTEGER,
      j30: INTEGER,
      j31: INTEGER,
      j32: INTEGER,
    },
    {
      tableName: 'xph_dcurrent',
      freezeTableName: true,
      timestamps: false,
    }
  );

  return Data;
};
