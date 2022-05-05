'use strict';

/**
 * leased-device service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::leased-device.leased-device');
