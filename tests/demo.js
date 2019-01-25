module.exports = {
  'Demo test' : function (browser) {
    browser.session(function(session) {
      console.log(session.sessionId);
    });
    browser
      .url(browser.launchUrl)
      // ...
      .end();
  }
};
