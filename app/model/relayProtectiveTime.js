'use strict';

module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;

  const RelayProtectiveTime = app.model.define(
    'relayProtectiveTime',
    {
      idjetime: { type: INTEGER, primaryKey: true, autoIncrement: true },
      facId: STRING(255),
      eIndex: STRING(255),
      jdqIndex: STRING(255),
      kzfs: STRING(255),
      val: STRING(255),
    },
    {
      tableName: 'xhp_jdqtime_config',
      freezeTableName: true,
      timestamps: false,
    }
  );

  return RelayProtectiveTime;
};
