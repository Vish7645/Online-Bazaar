module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: process.env.VERCEL_DEPLOY_PLUGIN_HOOK,
      apiToken: process.env.VERCEL_DEPLOY_PLUGIN_API_TOKEN,
      appFilter: process.env.VERCEL_DEPLOY_PLUGIN_APP_FILTER,
      teamFilter: process.env.VERCEL_DEPLOY_PLUGIN_TEAM_FILTER,
      roles: ["strapi-super-admin"],
    },
  },
});

// config/plugins.js

module.exports = ({ env }) => ({
  email: {
    provider: 'gmail',
    providerOptions: {
      username: env('GMAIL_USER'),
      password: env('GMAIL_PASSWORD'),
    },
    settings: {
      defaultFrom: 'Quickstaff2024@gmail.com',
      defaultReplyTo: 'Quickstaff2024@gmail.com',
    },
  },
});
