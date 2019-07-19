'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.resources('data', '/data', controller.data);
  router.resources('video', '/vedio', controller.video);
  router.resources('video', '/video', controller.video);
  router.resources('device', '/device', controller.device);
  router.resources('element', '/element', controller.element);
  router.resources('user', '/user', controller.user);
  router.resources('historyData', '/historydata', controller.historyData);
  router.resources('userDeviceList', '/devicelist', controller.userDeviceList);
  router.resources('standard', '/standard', controller.standard);
  router.resources('relay', '/relay', controller.relay);
  router.resources('relayConfiguration', '/relayConfiguration', controller.relayConfiguration);
  router.resources('relayProtectiveTime', '/relayProtectiveTime', controller.relayProtectiveTime);
};
