'use strict';

/**
 * service-account router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::service-account.service-account');
