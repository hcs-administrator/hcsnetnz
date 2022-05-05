'use strict';

/**
 * leased-device router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::leased-device.leased-device');
