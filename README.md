# Result Management System

A small Node.js result-management demo using Express, Handlebars, and MySQL. It has separate teacher and student flows for entering and viewing results.

## Run locally

Requirements: Node.js, npm, and a local MySQL instance.

```bash
cd "NodeJs Assignment"
npm install
node index.js
```

The package does not define a normal `start` script, so run the entry point directly. Configure the database connection in the app for your own local MySQL setup before starting it.

## Security and scope

This is a legacy learning project, not a production student-record system. Database and sample login credentials are embedded in the source and older notes. Do not deploy it as-is or reuse those values; move credentials into local environment variables and rotate any real credentials that were committed.
