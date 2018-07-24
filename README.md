# tom-example

![](https://i.imgur.com/O7GN5Pw.png)

> backoffice microservice example powered by [tom-microservice](http://tom.js.org/)

## Getting started

You need to install the project dependencies with `npm install`

Then you are ready to run tom 🐶

## Configuration

### Defining basic configuration

Your configuration project lives at [tom.config.js](tom.config.js).

Under the hood, we are using [`config`](http://npm.im/config) to differenciate between development and production credentials.

### Using Event System

Note that every time an action was called, it will be emit an event. You can use this event to connect the service with your code:

```js
  tom.on('payment:create', data => {
    console.log('payment:create', data)
  })

  tom.on('payment:update', data => {
    console.log('payment:update', data)
  })

  tom.on('notification', data => {
    console.log('notification', data)
    return {foo: 'bar'}
  })

  tom.on('notification:email', data => {
    console.log('notification:email', data)
    return {hello: 'bar'}
  })

  tom.on('*', (data) => {
    console.log('global notification', data)
    return {kiko: 'bar'}
  })
```

The payload that you return in each event will be printed by the command execution, for example:

```
$ tom --command=notification.email --templateId=summary --to=leo@hyperping.io --username=Leo
```

will print the following log:

```bash
notification:email from=hello@hyperping.io bcc=hello@hyperping.io subject='[hyperping.io] Weekly Report' to=leo@hyperping.io preview=https://ethereal.email/message/W1ZFkRVUhwyoi4LGW1bVFavoFgz2lN8AAAAAev9pdp8u5UhfRuVObjtoDPU kiko=bar foo=bar hello=bar
```

## Launch

### from CLI

![](https://i.imgur.com/qKJr7KS.png)

Just run `npx tom` passing the flags to execute a certain command, for example:

```bash
npx tom --command=notification.email --templateId=summary --to=leo@hyperping.io --username=Leo
```

You can use `tom --help` or see [scripts](/scripts) to see it in action.

### from HTTP microservice

By running `npm run dev`, it starts a development HTTP server in your machine.

![](https://i.imgur.com/bErFhvD.png)

Execute to start a HTTP server in your machine. The server has hot reloading.

## Production Ready

You can deploy tom 🐶 to production after attaching the following information at [`config/production.yaml`](config/production.yaml)

- [ ] **Stripe API Key**: It is uses by [`payment`](https://tom.js.org/#/?id=payment-1) commands
- [ ] **Email transporter credentials**: It is uses by [`notification:email`](https://tom.js.org/#/?id=notificationemail) commands.

After that, just run your service with `npm start` 🎉

Check [Environment Variables](https://tom.js.org/#/?id=environment-variables) section in the doc if you want to associate a port or an API key to protect your microservice from external requests.
