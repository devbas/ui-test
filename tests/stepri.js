module.exports = {
  '@disabled': false,

  'test stevenprins.com' : function (client) {
    
    client
      .url('http://stevenprins.com')
      .waitForElementPresent('body', 1000);
  },

  'about page' : function(client) {
    client
      .useXpath() 
      .click("/div[class()='header']/a[text()='about']")
      .pause(500)
      .assert.containsText('.container', 'Welcome to my site.')
      .end();
  }
};
