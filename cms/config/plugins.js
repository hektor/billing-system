module.exports = ({ env }) => ({
  email: {
    provider: "nodemailer",
    providerOptions: {
      host: env("SMTP_HOST", "smtp.example.com"),
      port: env("SMTP_PORT", 587),
      auth: {
        user: env("SMTP_USERNAME"),
        pass: env("SMTP_PASSWORD")
      },
      secure: false
    },
    settings: {
      defaultFrom: env("SMTP_EMAIL"),
      defaultReplyTo: env("SMTP_EMAIL")
    }
  }
});
