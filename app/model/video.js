'use strict';

module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;

  const Video = app.model.define(
    'video',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      appkey: STRING,
      secret: STRING,
      serial_number: STRING,
      facId: STRING,
      channel: STRING,
    },
    {
      tableName: 'xph_vedio',
      freezeTableName: true,
      timestamps: false,
    }
  );

  return Video;
};
