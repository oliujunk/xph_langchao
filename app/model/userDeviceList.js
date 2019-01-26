'use strict';

module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;

  const UserDeviceList = app.model.define(
    'userDeviceList',
    {
      idm: { type: INTEGER, primaryKey: true, autoIncrement: true },
      facId: STRING(255),
      user_id: INTEGER,
    },
    {
      tableName: 'xhp_user_fac',
      freezeTableName: true,
      timestamps: false,
    }
  );

  UserDeviceList.findDeviceList = async userId => {
    return await UserDeviceList.findAll({
      where: {
        user_id: userId,
      },
    });
  };

  return UserDeviceList;
};
