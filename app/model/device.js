'use strict';

module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;

  const Device = app.model.define(
    'device',
    {
      idm: { type: INTEGER, primaryKey: true, autoIncrement: true },
      FacID: STRING(20),
      EleNum: STRING(255),
      ElePro: STRING(255),
      FacName: STRING(255),
      WeleT: STRING(255),
      jgsj: STRING(255),
      wcsj: STRING(255),
      dqsj: STRING(255),
      Tel: STRING(255),
    },
    {
      tableName: 'xhp_equ_info',
      freezeTableName: true,
      timestamps: false,
    }
  );

  return Device;
};
