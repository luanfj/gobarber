interface IMailConfig {
  driver: 'ethereal';

  mailgun: {
    api_key: string;
    domain: string;
  };

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  mailgun: {
    api_key: process.env.MAILGUN_ACTIVE_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  },

  defaults: {
    from: {
      email: 'mailgun@sandbox6530ab320b2c409991f28b1981df1b5b.mailgun.org',
      name: 'Equipe GoBarber',
    },
  },
} as IMailConfig;
