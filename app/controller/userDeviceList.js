'use strict';

const Controller = require('egg').Controller;

const toInt = str => {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
};

class UserDeviceListController extends Controller {
  async show() {
    const deviceList = await this.ctx.model.UserDeviceList.findDeviceList(toInt(this.ctx.params.id));
    this.ctx.body = deviceList;
  }
}

module.exports = UserDeviceListController;
