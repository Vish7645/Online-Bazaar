module.exports = {
    async sendContactForm(ctx) {
      const { email, message } = ctx.request.body;
  
      console.log("Email: ", email, "Message: ", message);  // Debugging
  
      if (!email || !message) {
        return ctx.badRequest('Email and message are required.');
      }
  
      try {
        // Sending email using Strapi's email plugin
        await strapi.plugins['email'].services.email.send({
          to: 'Quickstaff2024@gmail.com',
          from: email,
          subject: 'New Contact Form Submission',
          text: message,
        });
  
        console.log("Email sent successfully");  // Debugging
  
        ctx.send({ success: true });
      } catch (error) {
        console.error("Error sending email:", error);  // Debugging
        ctx.send({ error: 'Failed to send email' }, 500);
      }
    },
  };
  