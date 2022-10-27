'use strict';

/**
 * booking controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const email = require('../../../template/email')

module.exports = createCoreController('api::booking.booking' , ({ strapi }) =>  ({
  // Method 1: Creating an entirely custom action
  async bookOrder(ctx) {
    try {
      console.log(ctx.request.body );
      const row = await strapi.db.query('api::booking.booking').findOne({
        select: ['*'],
        where: { course: ctx.request.body?.data?.course,email: ctx.request.body?.data?.email },
      });
      if(row){
        ctx.body = {
          data : {
            message : "You have Already registred in this course"
          }
        }
      }
      else {
        const user = {
          username : "mohammadjadid",
          email : "mohammad.jadid96.ma@gmail.com",
          firstname : "Mohammad ",
          lastname: "Jadid"
        }
        const {data , meta} = await super.create(ctx)

        // await strapi.plugins['email'].services.email.sendTemplatedEmail(
        //   {
        //     to: user.email,
        //     // from: is not specified, the defaultFrom is used.
        //   },
        //     email.emailTemplate,
        //   {
        //     user: _.pick(user, ['username', 'email', 'firstname', 'lastname']),
        //   }
        // )
        data.message = "You have successfully booked this cousre"
        ctx.body = {data , meta};
      }
    } catch (err) {
      ctx.body = err;
    }
  },

  async sendEmail(ctx) {
    await strapi.plugins['email'].services.email.send({
      to: 'eng.mohammad.jadid@gmail.com',
      from: 'mohammad.jadid96@yahoo.com', //e.g. single sender verification in SendGrid
      cc: '',
      bcc: '',
      replyTo: '',
      subject: 'The Strapi Email plugin worked successfully',
      text: 'Hello world!',
      html: 'Hello world!',
    }),
    data.message = "You have successfully booked this cousre"
    ctx.body = "send email";

  }

}));
