'use strict';

module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;

  const Relay = app.model.define(
    'relay',
    {
      idm: { type: INTEGER, primaryKey: true, autoIncrement: true },
      facId: STRING(255),
      jId: STRING(255),
      jName: STRING(255),
      jType: STRING(255),
    },
    {
      tableName: 'xhp_jdq',
      freezeTableName: true,
      timestamps: false,
    }
  );

  Relay.findRelayList = async deviceId => {
    return await Relay.findAll({
      where: {
        facId: deviceId,
      },
      order: [[ 'jId' ]],
    });
  };

  return Relay;
};
