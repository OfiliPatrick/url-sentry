# URL-Sentry

URL-Sentry is a website/url monitoring tool built primarily with Express and NodeJS. It is designed to:

- Monitor restricited websites.
- Send email notifications to a user when such a website is being accessed on the user’s local machine.

## Getting Started

- Node.js must be pre-installed.

### Clone

- Clone the repository to your local machine using
  `git clone https://github.com/OfiliPatrick/url-sentry.git`

### Local Setup

- Install node dependencies and start the express server for 'server.unsecure.js' using

```
cd url-sentry
npm install
npm start
```

### Usage

#### Website Restriction

![](https://github.com/OfiliPatrick/url-sentry/blob/master/hosts-file-example.png)

1. Navigate to your 'Hosts' file on your local machine through C:\Windows\System32\drivers\etc
2. Set
3.

##### Testing

1. Enter the URL of the restricited website on your browser
2. Email notifications start rolling in.

#### Note

For security reasons your 'Hosts' file should be read only by default.
