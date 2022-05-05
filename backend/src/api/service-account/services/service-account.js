'use strict';

/**
 * service-account service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::service-account.service-account');
