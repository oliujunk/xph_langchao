'use strict';

const Controller = require('egg').Controller;

const toInt = str => {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
};

class RelayConfigurationController extends Controller {
  async show() {
    const configuration = await this.ctx.model.RelayConfiguration.findConfiguration(toInt(this.ctx.params.id));
    this.ctx.body = configuration;
  }
}

module.exports = RelayConfigurationController;
