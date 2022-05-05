'use strict';

/**
 *  service-account controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::service-account.service-account');
