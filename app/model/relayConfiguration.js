'use strict';

module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;

  const RelayConfiguration = app.model.define(
    'relayConfiguration',
    {
      idje: { type: INTEGER, primaryKey: true, autoIncrement: true },
      facId: STRING(255),
      bds: STRING(255),
      cxsj: STRING(255),
      eIndex: STRING(255),
      gzsj: STRING(255),
      jdqIndex: STRING(255),
      kzfs: STRING(255),
      val: STRING(255),
      dxzt: STRING(255),
      jgsj: STRING(255),
      sxh: INTEGER,
    },
    {
      tableName: 'xhp_jdqele',
      freezeTableName: true,
      timestamps: false,
    }
  );

  RelayConfiguration.findConfiguration = async deviceId => {
    return await RelayConfiguration.findAll({
      where: {
        facId: deviceId,
      },
    });
  };

  return RelayConfiguration;
};
