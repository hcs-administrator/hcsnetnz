'use strict';

/**
 * asset-register service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::asset-register.asset-register');
