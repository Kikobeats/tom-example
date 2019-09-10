# tom-example

![](https://i.imgur.com/9j6sMh2.png)

> backoffice microservice example powered by [tom-microservice](http://tom.js.org/).

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/Kikobeats/tom-example&env=TOM_STRIPE_KEY&env=TOM_EMAIL_USER&env=TOM_EMAIL_PASSWORD&env=TOM_ALLOWED_ORIGIN&env=TOM_API_KEY)

## Getting started

You need to install the project dependencies with `npm install`.

Then you are ready to run **tom** 🐶.

## Configuration

### Defining basic configuration

Your configuration project live at [tom.config.js](tom.config.js).

Under the hood we are using [`config`](http://npm.im/config) for differenciate between development and production credentials.

### Using Event System

Every time a command is executed, it emits an event.

You can use these events for connecting the service with your specific code.

Read [Event System](https://tom.js.org/#/?id=event-system) section at docs for knowing more.

## Launch

### from CLI

![](https://i.imgur.com/qKJr7KS.png)

Just run  `npx tom` passing the flags for execute a certain command, for example:

```bash
npx tom --command=notification.email --templateId=summary --to=leo@hyperping.io --username=Leo
```

You can use `tom --help` or see [scripts](/scripts) to see it in action.

### from HTTP microservice

Running `npm run dev` start a development HTTP server in your machine.

![](https://i.imgur.com/bErFhvD.png)

Execute  for started a HTTP server in your machine. The server has hot reloading.

## Production Ready

The service is almost production ready. You need to provide the [Environment Variables](https://tom.js.org/#/?id=environment-variables) for:

- [ ] **Stripe API Key** used by [`payment`](https://tom.js.org/#/?id=payment-1) commands
- [ ] **Email credentials** used by [`notification:email`](https://tom.js.org/#/?id=notificationemail) commands.

After that, just run your service with `npm start` 🎉.
