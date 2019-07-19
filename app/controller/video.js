'use strict';

const Controller = require('egg').Controller;

class VideoController extends Controller {
  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.Video.findOne({
      where: {
        facId: ctx.params.id,
      },
    });
  }
}

module.exports = VideoController;
