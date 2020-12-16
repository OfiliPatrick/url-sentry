# URL-Sentry

URL-Sentry is a website/url monitoring tool built primarily with Express and NodeJS. It is designed to:

- Monitor restricted websites.
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

1. Navigate to your 'hosts' file on your local machine through C:\Windows\System32\drivers\etc.
2. Make sure you have the appropriate permissions to edit the file.
3. Below the host file, map the website you want to restrict e.g test.com to the IP address for localhost (127.0.0.1).

![](https://github.com/OfiliPatrick/url-sentry/blob/master/hosts-file-example.png)

#### Testing

1. Enter the URL of the restricited website on your browser.
2. Email notification starts to roll in.

### Note

For security reasons your 'hosts' file should be read only by default.
