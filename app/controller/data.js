'use strict';

const Controller = require('egg').Controller;

class DataController extends Controller {
  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.Data.findOne({
      where: {
        facId: ctx.params.id,
      },
      order: [[ 'dataTime', 'DESC' ]],
    });
  }
}

module.exports = DataController;
