'use strict';

const Controller = require('egg').Controller;

const toInt = str => {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
};

class ElementController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: toInt(ctx.query.limit),
      offset: toInt(ctx.query.offset),
    };
    ctx.body = await ctx.model.Element.findAll(query);
  }
  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.Element.findOne({
      where: {
        index: ctx.params.id,
      },
    });
  }
}

module.exports = ElementController;
