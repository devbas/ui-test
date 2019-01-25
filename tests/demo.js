module.exports = {
  'Demo test': (browser, done) => {
    
    browser
      .url(browser.launchUrl)
      .end(() => done())
    
  }
}
