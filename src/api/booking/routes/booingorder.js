module.exports = {
  routes: [
    { // Route with custom policies
      method: 'POST',
      path: "/booking/bookorder",
      handler: 'booking.bookOrder',
    },
    { // Route with custom policies
      method: 'POST',
      path: "/booking/sendemail",
      handler: 'booking.sendEmail',
    }
  ]
}
