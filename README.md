# CoolArtStore

A demo project showing the minimum pieces of designing an application using Node.js as a mockup platform.
The client-side JavaScript requires jQuery.

Forked to run on [Lineman](https://github.com/testdouble/lineman)

This repository contains everything you need to get the demo running locally on a machine with Node already installed. If you need help installing Node, follow the instructions on [the project's site](http://nodejs.org/). After cloning this repo to your machine and running `npm install`, you can start the server by going to the directory you cloned it to in your terminal or command line and typing

```bash
$ lineman run
```

To see the demo in action, navigate to http://localhost:8000 in your browser. You may need to open port 8000/tcp and 8000/udp on your server by changing the machine's firewall rules. If you want to use a different port, set `server: { web: { port: 8000 } }` in `config/application.js` to the port number of your preference and make sure the appropriate port is opened on the firewall. Ports higher than 1024 are historically "unprivileged" so you should not have to run coolartstore as a superuser. They should be accessible to any standard user.

To tweak and make changes, just edit the relevant files, save, and lineman will apply your updates automatically. No need to restart the server (just reload the page). Use ^C to stop the current execution.
