/* eslint-disable no-extend-native */
'use strict';

module.exports = app => {
  const { INTEGER, FLOAT, STRING } = app.Sequelize;

  const HistoryData = app.model.define(
    'historyData',
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

  HistoryData.findHistoryByLimit = async (facId, page = 1, pageSize = 100) => {
    return await HistoryData.findAll({
      where: {
        facId,
      },
      order: [[ 'dataTime', 'DESC' ]],
      offset: (page - 1) * pageSize,
      limit: pageSize,
    });
  };

  HistoryData.findHistoryByDate = async (facId, start, end, interval = 1) => {
    const startBack = start;
    Date.prototype.format = function(fmt) {
      const o = {
        'M+': this.getMonth() + 1, // 月份
        'd+': this.getDate(), // 日
        'h+': this.getHours(), // 小时
        'm+': this.getMinutes(), // 分
        's+': this.getSeconds(), // 秒
        'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
        S: this.getMilliseconds(), // 毫秒
      };
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          (this.getFullYear() + '').substr(4 - RegExp.$1.length)
        );
      }
      for (const k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length === 1
              ? o[k]
              : ('00' + o[k]).substr(('' + o[k]).length)
          );
        }
      }
      return fmt;
    };
    const dateArray = [];
    start = new Date(start).format('yyyy-MM-dd hh:mm');
    const addDate = (start, interval) => {
      let timestamp = Date.parse(new Date(start));
      timestamp = timestamp / 1000;
      timestamp += interval * 60;
      const newTime = new Date(timestamp * 1000).format('yyyy-MM-dd hh:mm');
      return newTime;
    };

    while (Date.parse(new Date(start)) <= Date.parse(new Date(end))) {
      dateArray.push(start);
      start = addDate(start, interval);
    }

    // return await HistoryData.findAll({
    //   where: {
    //     facId,
    //     dataTime: {
    //       [Op.between]: [ start, end ],
    //     },
    //   },
    //   order: [[ 'dataTime', 'DESC' ]],
    // });

    return await app.model.query(
      'SELECT idm,facId,dataTime,e1,e2,e3,e4,e5,e6,e7,e8,e9,e10,e11,e12,e13,e14,e15,e16 FROM xph_dcurrent WHERE facId = ? AND dataTime BETWEEN ? AND ? AND DATE_FORMAT(dataTime, ?) IN (?)',
      {
        replacements: [ facId, startBack, end, '%Y-%m-%d %H:%i', dateArray ],
        type: 'SELECT',
      }
    );
  };

  return HistoryData;
};
