'use strict';

module.exports = app => {
  const { STRING } = app.Sequelize;

  const Standard = app.model.define(
    'standard',
    {
      xzqh: { type: STRING, primaryKey: true },
      name: STRING(25),
      val1: STRING(10),
      val2: STRING(10),
      val3: STRING(10),
      val4: STRING(10),
      val5: STRING(10),
      val6: STRING(10),
      val7: STRING(10),
    },
    {
      tableName: 'xph_area_data',
      freezeTableName: true,
      timestamps: false,
    }
  );

  return Standard;
};
