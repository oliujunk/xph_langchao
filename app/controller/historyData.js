'use strict';

const Controller = require('egg').Controller;

const toInt = str => {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
};

class HistoryDataController extends Controller {
  async show() {
    const query = this.ctx.query;
    let historyData;
    if (query.page && query.pageSize) {
      historyData = await this.ctx.model.HistoryData.findHistoryByLimit(this.ctx.params.id, toInt(query.page), toInt(query.pageSize));
    } else if (query.startTime && query.endTime) {
      historyData = await this.ctx.model.HistoryData.findHistoryByDate(this.ctx.params.id, query.startTime, query.endTime, query.interval);
    }
    this.ctx.body = historyData;
  }
}

module.exports = HistoryDataController;
