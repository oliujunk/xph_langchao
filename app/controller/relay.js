'use strict';

const Controller = require('egg').Controller;

const toInt = str => {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
};

class RealyController extends Controller {
  async show() {
    const relayList = await this.ctx.model.Relay.findRelayList(toInt(this.ctx.params.id));
    this.ctx.body = relayList;
  }
}

module.exports = RealyController;
