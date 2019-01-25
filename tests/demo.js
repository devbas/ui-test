module.exports = {
  '@disabled': false,

  'demo test google' : function (client) {
    
    client
      .url('http://google.com')
      .waitForElementPresent('body', 1000);
  },

  'part two' : function(client) {
    client
      .setValue('input[type=text]', ['nightwatch', client.Keys.ENTER])
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
      .end();
  },
  
  'fail demo': function (client) {
    client 
      .url('https://bastiangeneugelijk.com')
      .waitForElementPresent('body', 1000)
  }, 
  
  'fail demo part two': function (client) {
    client
      .setValue('input[type=text]', ['nightwatch', client.Keys.ENTER])
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
      .end();
  }
};

// module.exports = {
//   'Demo test': browser => {
    
//     browser
//       .url(browser.launchUrl)
//       .end()
    
//   }
// }
