exports.config = {
  user: '',
  key: '',

  updateJob: false,
  specs: [
    './examples/run-first-test/specs/first_test.js'
  ],
  exclude: [],

  capabilities: [{
    project: "First Webdriverio Android Project",
    build: 'Webdriverio Android',
    name: 'first_test',
    device: 'Google Pixel 6',
    os_version: "12.0",
    "browserstack.user": "",
    "browserstack.key" : "",
    appiumVersion: "1.18.0",
    app: 'bs://24b6b390d7bfaf9002e6b8433378a04a5850e1a1',
   
    // 'browserstack.debug': true
  }],

  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  path: "/wd/hub",
  hostname: "hub.browserstack.com",
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 20000
  }
};
