module.exports = {
  emailTemplate: {
    subject: 'Welcome <%= user.firstname %>',
    text: `Welcome to mywebsite.fr!
      Your account is now linked with: <%= user.email %>.`,
    html: `<h1>Welcome to mywebsite.fr!</h1>
      <p>Your account is now linked with: <%= user.email %>.<p>`,
  }
};
