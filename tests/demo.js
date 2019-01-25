module.exports = {
  'Google Search' : function (browser) {
    browser
      .url('https://www.google.com')
      .waitForElementVisible('input[name="q"]', 4000)
      .setValue('input[name="q"]', 'hello world')
      .keys(browser.Keys.ENTER)
      .waitForElementVisible('#resultStats', 4000)
      .assert.urlContains('q=hello+world')
      .end();
  },

  'Google Search with Fruits' : function (browser) {
    browser
      .url('https://www.google.com')
      .waitForElementVisible('input[name="q"]', 4000)
      .setValue('input[name="q"]', 'Fruits')
//       .keys(browser.Keys.ENTER)
      .waitForElementVisible('#resultStats', 4000)
      .assert.urlContains('q=Fruits')
      .end();
  },

  'Google Search with Food' : function (browser) {
    browser
      .url('https://www.google.com')
      .waitForElementVisible('input[name="q"]', 4000)
      .setValue('input[name="q"]', 'Food')
      .keys(browser.Keys.ENTER)
      .waitForElementVisible('#resultStats', 4000)
      .assert.urlContains('q=Food')
      .end();
  },

  'Google Search with House' : function (browser) {
    browser
      .url('https://www.google.com')
      .waitForElementVisible('input[name="q"]', 4000)
      .setValue('input[name="q"]', 'House')
      .keys(browser.Keys.ENTER)
      .waitForElementVisible('#resultStats', 4000)
      .assert.urlContains('q=House')
      .end();
  }, 
  
  'Finished': function(browser) {
    console.log('what is your problem')
    
    browser
      .perform(() => {
        console.log('[perform]: Finished Test:', browser.currentTest.name)
      })
      .end();
  }

  };

// module.exports = {
//   '@disabled': false,

//   'demo test google' : function (client) {
    
//     client
//       .url('http://google.com')
//       .waitForElementPresent('body', 1000);
//   },

//   'part two' : function(client) {
//     client
//       .setValue('input[type=text]', ['nightwatch', client.Keys.ENTER])
//       .pause(1000)
//       .assert.containsText('#main', 'Night Watch')
//       .end();
//   },
  
//   'fail demo': function (client) {
//     client 
//       .url('https://bastiangeneugelijk.com')
//       .waitForElementPresent('body', 1000)
//   }, 
  
//   'fail demo part two': function (client) {
//     client
//       .setValue('input[type=text]', ['nightwatch', client.Keys.ENTER])
//       .pause(1000)
//       .assert.containsText('#main', 'Night Watch')
//       .end();
//   }
// };

// module.exports = {
//   'Demo test': browser => {
    
//     browser
//       .url(browser.launchUrl)
//       .end()
    
//   }
// }
