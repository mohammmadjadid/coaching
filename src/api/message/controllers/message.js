'use strict';

/**
 * message controller
 */
const axios = require('axios');

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::message.message' ,  ({ strapi }) =>  ({


    async create(ctx) {
      // some logic here
      var secret_key = "6Leqw-MhAAAAABGZRPrXsb22vBuN3VC7bP6oM8yz";
      const response = await super.create(ctx);
      // some more logic

      return response;
    }
}));
