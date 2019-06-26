'use strict';

module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1546405862834_5663';

  // add your config here
  config.middleware = [];

  config.sequelize = {
    dialect: 'mysql',
    // host: '115.28.187.9',
    // host: '120.25.235.236',
    host: '127.0.0.1',
    // host: '192.168.1.135',
    port: 3306,
    database: 'xph',
    // database: 'xph_new',
    // username: 'test',
    username: 'root',
    password: '123456',
  };

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
  };

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  return config;
};
