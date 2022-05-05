'use strict';

/**
 * key-name router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::key-name.key-name');
