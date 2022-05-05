'use strict';

/**
 * key-name service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::key-name.key-name');
