'use strict';

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize;

  const User = app.model.define(
    'user',
    {
      id_: { type: INTEGER, primaryKey: true, autoIncrement: true },
      username: STRING(32),
      password: STRING(32),
      realname: STRING(32),
      age: INTEGER,
      createtime: DATE,
      email: STRING(128),
      sex: INTEGER,
      state: INTEGER,
    },
    {
      tableName: 'sys_user',
      freezeTableName: true,
      timestamps: false,
    }
  );

  return User;
};
